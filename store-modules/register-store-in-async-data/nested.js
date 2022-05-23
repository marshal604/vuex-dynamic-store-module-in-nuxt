export const state = () => ({
  data: [],
})

export const getters = {
  data(state) {
    return state.data
  },
}

export const mutations = {
  SET_DATA(state, data) {
    state.data = data
  },
}

export const actions = {
  fetchData({ commit }) {
    commit('SET_DATA', [
      {
        name: 'test3',
      },
      {
        name: 'test4',
      },
    ])
  },
}
