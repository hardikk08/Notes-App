// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

let app;
var config = {
  apiKey: "AIzaSyCYJ3mRZ9Am-IVI0QTTuGPZ7GODs__MrNU",
  authDomain: "myproject-10101.firebaseapp.com",
  databaseURL: "https://myproject-10101.firebaseio.com",
  projectId: "myproject-10101",
  storageBucket: "",
  messagingSenderId: "1061473019891"
};

firebase.initializeApp(config);

Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
});