// 引入创建app实例的函数
import { createApp } from 'vue'
// 引入app组件
import App from './App.vue'
// 引入路由器实例
import router from './router'
// 引入创建pinia的函数
import { createPinia } from 'pinia'
// 注册svg图标
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局插件
import gloalComponent from '@/utils/GlobalComponents'
//引入全局样式
import '@/styles/index.scss'
// 创建pinia实例
const pinia = createPinia()
// 创建app应用实例
const app = createApp(App)
// 注册路由插件
app.use(router)
// 注册 gloalComponent自定义插件
app.use(gloalComponent)
// 注册pinia插件
app.use(pinia)
// 将app应用实例挂载到挂载点上
app.mount('#app')
