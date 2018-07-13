// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import store from './store'

let app
let config = {
  apiKey: 'AIzaSyCYJ3mRZ9Am-IVI0QTTuGPZ7GODs__MrNU',
  authDomain: 'myproject-10101.firebaseapp.com',
  databaseURL: 'https://myproject-10101.firebaseio.com',
  projectId: 'myproject-10101',
  storageBucket: 'myproject-10101.appspot.com',
  messagingSenderId: '1061473019891'
}
firebase.initializeApp(config)

Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('USER_AUTH_DATA', user)
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      components: {
        App
      },
      template: '<App/>'
    })
  }
})
