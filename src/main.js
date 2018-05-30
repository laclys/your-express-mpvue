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
    },
    tabBar: {
      selectedColor: 'black',
      list: [
        {
          pagePath: 'pages/express/main',
          text: '查询',
          iconPath: 'static/img/todo.png',
          selectedIconPath: 'static/img/todo-active.png'
        },
        {
          pagePath: 'pages/me/main',
          text: '我的',
          iconPath: 'static/img/me.png',
          selectedIconPath: 'static/img/me-active.png'
        }
      ]
    }
  }
}
