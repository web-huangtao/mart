import Footer from './footer/index'
import Sticky from './sticky/index'

function compoennts(Vue) {
  if (compoennts.installed) {
    return
  }
  Vue.component('v-footer', Footer)
  Vue.component('v-sticky', Sticky)
}
export default compoennts
