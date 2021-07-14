import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import Textarea from './views/Textarea.vue'

Vue.use(Router);


export default  new Router({
made:"history",
//component URLを紐付けする//
routes:[{path:'/',component:Home},{path:'/users',component:Users},{path:'/textarea',component:Textarea}]
});