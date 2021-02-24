/*
说明：该项目是二开项目，我是把原来的项目的页面由vue页面改成nvue页面，再从代码进行了我自己认为的优化
原作者: Darshan1358
原项目源码: https://github.com/darshan1358/wan-android
*/

import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

App.mpType = 'app'
App.store = store

const app = new Vue({
	...App
})
app.$mount()
