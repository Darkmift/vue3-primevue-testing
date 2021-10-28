import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  getters: {
    getUser: ({ user }) => user
  },
  mutations: {
    setUser: (state, user) => state.user = user
  },
  actions: {
    logUser: ({ commit }, { user }) => commit({ type: 'setUser', user })
  },
})
