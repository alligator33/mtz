import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    config: {
      name: process.env['VUE_APP_NAME'] || '{env.APP_NAME}',
      slogan: '',
      domain: process.env['VUE_APP_DOMAIN'] || '{env.APP_DOMAIN}',
      login_url: process.env['VUE_APP_LOGIN_URL'] || '{env.VUE_APP_LOGIN_URL}',
      email:process.env['VUE_APP_EMAIL'] || '{env.APP_EMAIL}',
      address:process.env['VUE_APP_ADDY'] || '{env.APP_ADDY}',
      telephone:process.env['VUE_APP_NUM'] || '{env.APP_NUM}',
    },
  },
  mutations: {

  },
  actions: {

  }
})
