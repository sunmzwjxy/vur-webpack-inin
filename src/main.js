import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import './plugins/Mint-UI.js'

// 导入MUI 样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios

var vm = new Vue({
    el: '#app',
    render: f => f(App),
    router
})