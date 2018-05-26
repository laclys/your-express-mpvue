import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false // 生产环境提醒关掉

const app = new Vue(App)
app.$mount()

export default {
  // app.json
  config: {
    pages: ['^pages/express/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1e9cd6',
      navigationBarTitleText: '快递到哪儿咯',
      navigationBarTextStyle: 'light'
    }
  }
}
