import _ from 'lodash'

const registerStore =
  (store) =>
  ({ pathList, module }) => {
    if (store.hasModule(pathList)) return
    const preserveState = _.get(store.state, pathList.join('.'))
    store.registerModule(
      pathList,
      { namespaced: true, ...module },
      { preserveState }
    )
  }

export default ({ store }, inject) => {
  inject('registerStore', registerStore(store))
}
