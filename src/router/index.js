import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>import('@/views/home/Home.vue')
const Finance = () =>import('@/views/finance/Finance.vue')
const Login = () =>import('@/views/login/Login.vue')
const Message = () =>import('@/views/message/Message.vue')
const Power = () =>import('@/views/power/Power.vue')
const Production = () =>import('@/views/production/Production.vue')
const Recharge = () =>import('@/views/recharge/Recharge.vue')
const Sell = () =>import('@/views/sell/Sell.vue')
const Stock = () =>import('@/views/stock/Stock.vue')

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/finance',
    component:Finance
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/message',
    component:Message
  },
  {
    path:'/power',
    component:Power
  },
  {
    path:'/production',
    component:Production
  },
  {
    path:'/recharge',
    component:Recharge
  },
  {
    path:'/sell',
    component:Sell
  },
  {
    path:'/stock',
    component:Stock
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
