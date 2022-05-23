import _ from 'lodash'

const registerStore =
  (store) =>
  ({ path, module }) => {
    const modulePathList = path.split('/')
    if (store.hasModule(modulePathList)) return
    const preserveState = _.get(store.state, modulePathList.join('.'))
    const moduleName = modulePathList.length === 1 ? path : modulePathList
    store.registerModule(
      moduleName,
      { namespaced: true, ...module },
      { preserveState }
    )
  }

export default ({ store }, inject) => {
  inject('registerStore', registerStore(store))
}
