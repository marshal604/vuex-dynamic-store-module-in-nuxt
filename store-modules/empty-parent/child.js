export const state = () => ({
  title: 'Child',
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

export const actions = {}
