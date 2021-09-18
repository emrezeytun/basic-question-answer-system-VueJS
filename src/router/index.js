import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import NewQuestion from '../views/NewQuestion.vue'
import CssScss from '../views/CssScss.vue'
import Javascript from '../views/Javascript.vue'
import VueJS from '../views/VueJS.vue'
import SingleQuestion from '../views/SingleQuestion.vue'
import ReactJS from '../views/ReactJS.vue'
import AngularJS from '../views/AngularJS.vue'
import NodeJS from '../views/NodeJS.vue'
import PHP from '../views/PHP.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/new_question',
    name: 'New Question',
    component: NewQuestion,
    props: true
  },
  {
    path: '/question/:id',
    name: 'SingleQuestion',
    component: SingleQuestion
  },
  {
    path: '/javascript',
    name: 'Javascript',
    component: Javascript
  },
  {
    path: '/vueJS',
    name: 'VueJS',
    component: VueJS
  },
  {
    path: '/css',
    name: 'Css',
    component: CssScss
  },
  {
    path: '/reactJS',
    name: 'ReactJS',
    component: ReactJS
  },
  {
    path: '/angularJS',
    name: 'AngularJS',
    component: AngularJS
  },
  {
    path: '/nodeJS',
    name: 'NodeJS',
    component: NodeJS
  },
  {
    path: '/php',
    name: 'PHP',
    component: PHP
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
