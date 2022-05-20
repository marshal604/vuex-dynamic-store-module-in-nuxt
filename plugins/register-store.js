const registerStore =
  (store) =>
  ({ path, module }) => {
    if (store.hasModule(path)) return
    const preserveState = store.state[path]
    const modulePathList = path.split('/')
    const moduleName =
      modulePathList.length === 1 ? modulePathList[0] : modulePathList
    store.registerModule(
      moduleName,
      { namespaced: true, ...module },
      { preserveState }
    )
  }

export default ({ store }, inject) => {
  inject('registerStore', registerStore(store))
}
