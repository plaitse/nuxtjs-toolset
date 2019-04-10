import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      },
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      /* This method is dispatched by Nuxt to initialize the store to fetch some data 
        - that we use a lot in many components - only once instead of constantly reaching out the server */
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxtjs-toolset.firebaseio.com/posts.json')
          .then(response => {
            // Format the object to an array
            const postsArray = [];
            for (const key in response.data) {
              postsArray.push({...response.data[key], id: key});
            }
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(error => context.error(error));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedData: new Date()
        };
        return axios.post('https://nuxtjs-toolset.firebaseio.com/posts.json?auth=' + 
          vuexContext.state.token, createdPost)
          .then(response => {
            vuexContext.commit('addPost', {...createdPost, id: response.data.name});
          })
          .catch(error => {
            console.log(error);
          })
      },
      editPost(vuexContext, editedPost) {
        const editPost = {
          ...editedPost,
          updatedData: new Date()
        };
        return axios.put('https://nuxtjs-toolset.firebaseio.com/posts/' + 
          editPost.id + '.json?auth=' + vuexContext.state.token, editPost)
          .then(response => {
            vuexContext.commit('editPost', editPost);
          })
          .catch(error => {
            console.log(error);
          })
      },
      authenticateUser(vuexContext, authData) {
        let authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' + process.env.firebaseApiKey;
        if (!authData.isLogin) authUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.firebaseApiKey;
        return axios.post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
          .then(response => {
            vuexContext.commit('setToken', response.data.idToken);
            // For the client
            localStorage.setItem('token', response.data.idToken);
            // + before a string converts it to a number 
            localStorage.setItem('tokenExpiration', new Date().getTime() + +response.data.expiresIn * 1000);
            // For the server
            Cookie.set('jwt', response.data.idToken);
            Cookie.set('expirationDate', new Date().getTime() + +response.data.expiresIn * 1000);
            return axios.post('localhost:3000/api/track-data', {
              // Change localhost to 127.0.0.1 if error
              data: 'Authenticated'
            });
          })
          .catch(error => console.log(error));
      },
      initAuth(vuexContext, req) {
        let token, expirationDate;
        if (req) {
          if (!req.headers.cookie) return;
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(el => el.trim().startsWith('jwt='));
          if (!jwtCookie) return;
          token = jwtCookie.split('=')[1];
          expirationDate = req.headers.cookie
            .split(';')
            .find(el => el.trim().startsWith('expirationDate='))
            .split('=')[1];
        } else {
          token = localStorage.getItem('token');
          expirationDate = localStorage.getItem('tokenExpiration');      
        }
        // + before a string converts it to a number
        if (new Date().getTime() > +expirationDate || !token) {
          vuexContext.dispatch('logout');
          return;
        }
        vuexContext.commit('setToken', token);
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken');
        Cookie.remove('jwt');
        Cookie.remove('expirationDate');
        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  })
}

export default createStore;