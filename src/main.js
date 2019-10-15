import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store/store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyBEBCUL2d_ZcTpd__kYX0tikdoYH1yOQ8U",
  authDomain: "crm-system-multifruit.firebaseapp.com",
  databaseURL: "https://crm-system-multifruit.firebaseio.com",
  projectId: "crm-system-multifruit",
  storageBucket: "",
  messagingSenderId: "768231734208",
  appId: "1:768231734208:web:b03c6452b83e0040b72625"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
