import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
      }
    },
    actions: {
      /* This method is dispatched by Nuxt to initialize the store to fetch some data 
        - that we use a lot in many components - only once instead of constantly reaching out the server */
      nuxtServerInit(vuexContext, context) {
        // BaseUrl refers to the one sets in nuxt.config.js env
        // return context.app.$axios.get(process.env.baseUrl + '.json')
        // We use the axios package from @nuxt set in nuxt.config.js modules
        return context.app.$axios.$get('.json')
          .then(response => {
            console.log(response);
            // Format the object to an array
            const postsArray = [];
            // for (const key in response.data) {
              // postsArray.push({...response.data[key], id: key});
              // The @nuxt/axios package directly gives us the data we want
            for (const key in response) {
              postsArray.push({...response[key], id: key});
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
        return axios.post('https://nuxtjs-toolset.firebaseio.com/posts.json', createdPost)
          .then(response => {
            console.log(response);
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
        return axios.put('https://nuxtjs-toolset.firebaseio.com/posts/' + editPost.id + '.json', editPost)
          .then(response => {
            console.log(response);
            vuexContext.commit('editPost', editPost);
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  })
}

export default createStore;