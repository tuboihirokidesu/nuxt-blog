import Vuex from 'vuex'
import { ActionContext } from 'vuex/types'

import { Blog, Id } from '../types/index'
import firebase from 'firebase/compat/app'

export const state = () => ({})
export type RootState = ReturnType<typeof state>

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [] as Blog[],
    },
    //NOTE: Stateを更新するメソッドです
    //NOTE: 同期処理でなければなりません
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post: Blog) {
        state.loadedPosts.push(post)
      },
      // editPost(state, editedPost) {
      //   const postIndex = state.loadedPosts.findIndex(
      //     (post) => post.id === editedPost.id
      //   )
      //   state.loadedPosts[postIndex] = editedPost
      // },
    },
    //NOTE: Mutationsを介して、Stateを更新するメソッドです
    //非同期処理でなければなりません
    actions: {
      async nuxtServerInit(
        vuexContext: ActionContext<RootState, RootState>,
        context
      ) {
        const data: (Blog & Id)[] = []
        return await firebase
          .firestore()
          .collection('blog')
          .get()
          .then((res) => {
            // console.log(firebase.firestore().collection('blog').doc().id)
            res.forEach((doc) => {
              const obj = {
                ...(doc.data() as Blog),
                id: doc.id,
              }
              data.push(obj)
            })
            vuexContext.commit('setPosts', data)
          })
          .catch((e) => context.error(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      async addPost(vuexContext, post: Blog) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        }
        return await firebase
          .firestore()
          .collection('blog')
          .add({
            ...post,
            updatedDate: new Date(),
          })
          .then(
            (result) =>
              vuexContext.commit('addPost', { ...createdPost, id: result.id }) //result.idには一意なID
          )
          .catch((e) => console.log(e))
      },
      // editPost(vuexContext, editedPost) {
      //   return firebase
      //     .firestore()
      //     .collection('blog')
      //     .doc(editedPost.id)
      //     .update({
      //       capital: true,
      //     })
      //     .then((res) => {
      //       vuexContext.commit('editPost', editedPost)
      //     })
      //     .catch((e) => console.log(e))
      // },
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
