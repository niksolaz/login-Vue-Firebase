// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
 // Initialize Firebase
 var config = {
  apiKey: "API KEY",
  authDomain: "Auth Domain",
  databaseURL: "URL",
  projectId: "Project ID",
  storageBucket: "Storage Bucket",
  messagingSenderId: "Messaging Send ID"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if( !app ) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

