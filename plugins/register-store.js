import _ from 'lodash'

const registerStore =
  (store) =>
  ({ namespaces, module }) => {
    if (namespaces.length > 1)
      registerStore(store)({
        namespaces: namespaces.slice(0, -1),
        module: {
          state: {},
        },
      })

    if (store.hasModule(namespaces)) return
    const preserveState = _.get(store.state, namespaces.join('.'))
    store.registerModule(
      namespaces,
      { namespaced: true, ...module },
      { preserveState }
    )
  }

export default ({ store }, inject) => {
  inject('registerStore', registerStore(store))
}
