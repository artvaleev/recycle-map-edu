import Vue from 'vue'
import Toast from "vue-toastification";
import App from './App.vue'
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

new Vue({
  render: h => h(App),
}).$mount('#app')
