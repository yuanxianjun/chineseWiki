export default {
  changeMenu: ({
    commit
  }, activeUrl) => {
    // console.log(activeUrl,"activeURl")
    commit('UPDATA_MENU', activeUrl)
  },
}