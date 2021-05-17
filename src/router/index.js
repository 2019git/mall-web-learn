import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Shopcart = () => import('@/views/shopcart/Shopcart.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const GoodsDetails = () => import('@/views/details/goodsDetails/GoodsDetails.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/shopcart',
    component:Shopcart
  },
  {
    path: '/goodsDetails/:id',
    name: '商品详情',
    component: GoodsDetails
  },
  {
    path: '/profile',
    component:Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
