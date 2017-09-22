import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
// 导入组件
import Header from '@/components/header/header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hello,
        // 注册组件，命名为Header
        Header: Header
      }
    }
  ]
});
