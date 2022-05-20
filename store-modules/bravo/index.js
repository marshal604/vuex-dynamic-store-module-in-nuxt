export const state = () => ({
  title: 'Bravo',
})

export const getters = {
  title(state) {
    return state.title
  },
}

export const mutations = {
  SET_TITLE(state, title) {
    state.title = title
  },
}

export const actions = {
  setTitle({ commit }, title) {
    commit('SET_TITLE', title)
  },
}
