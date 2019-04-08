import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      /* This method is dispatched by Nuxt to initialize the store to fetch some data 
        - that we use a lot in many components - only once instead of constantly reaching out the server */
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'Hello',
                previewText: 'This is my first post',
                thumbnail: 'https://www.homage.sg/wp-content/uploads/2018/09/47724337_l-1080x675.jpg'
              },
              {
                id: '2',
                title: 'Hey',
                previewText: 'This is my second post',
                thumbnail: 'https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg'
              },
              {
                id: '3',
                title: 'Hi',
                previewText: 'This is my third post',
                thumbnail: 'https://cdn.nextgov.com/media/img/upload/2018/08/29/082918fingerprintNG/860x394.jpg'
              } 
            ]);
            resolve();
          }, 1500);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
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