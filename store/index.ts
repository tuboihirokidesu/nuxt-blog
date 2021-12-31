import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    //NOTE: Stateを更新するメソッドです
    //NOTE: 同期処理でなければなりません

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },
    //NOTE: Mutationsを介して、Stateを更新するメソッドです
    //非同期処理でなければなりません
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post!',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post!',
                thumbnail:
                  'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
              },
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    //NOTE: Stateの内容から算出される値です
    //Componentにデータを加工して提供します（Viewに表示させる）
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore
