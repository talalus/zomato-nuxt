import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: '/tail-spin.svg',
  error: '/no-camera.svg'
})
