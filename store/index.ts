import Vuex from 'vuex'
import { ActionContext } from 'vuex/types'

import { Blog } from '../types/index'
import firebase from 'firebase/compat/app'

export const state = () => ({})
export type RootState = ReturnType<typeof state>

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [] as Blog[],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post: Blog) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      deletePost(state, deletePost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === deletePost.id
        )
        state.loadedPosts[postIndex] = deletePost
      },
    },
    actions: {
      async nuxtServerInit(
        vuexContext: ActionContext<RootState, RootState>,
        context
      ) {
        const data: Blog[] = []
        return await firebase
          .firestore()
          .collection('blog')
          .get()
          .then((res) => {
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
      async editPost(vuexContext, editedPost) {
        try {
          await firebase
            .firestore()
            .collection('blog')
            .doc(editedPost.id)
            .update({
              ...editedPost,
              editedDate: new Date(),
            })
          vuexContext.commit('editPost', editedPost)
        } catch (e) {
          return console.log(e)
        }
      },
      async deletePost(vuexContext, post) {
        try {
          await firebase
            .firestore()
            .collection('blog')
            .doc(post.id)
            .delete()
            .then(() => console.log('deleteしたで'))
          vuexContext.commit('deletePost', post)
        } catch (e) {
          return console.log(e)
        }
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      getPost: (state) => (id: string | undefined) => {
        return state.loadedPosts.find((post) => post.id === id)
      },
    },
  })
}

export default createStore
