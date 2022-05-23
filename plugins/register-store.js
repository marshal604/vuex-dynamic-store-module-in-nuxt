import _ from 'lodash'

const registerStore =
  (store) =>
  ({ namespaces, module }) => {
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
