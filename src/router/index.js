import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index'
import userOperation from '@/views/userOperation/index'
import buy from '@/views/buy/index'
import sell from '@/views/sell/index'
import cart from '@/views/cart/index'
import goodsDetail from '@/views/goods/index'
import userCenter from '@/views/userCenter/userCenter'
import index from '@/views/home/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'userOperation',
            component: userOperation
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/home/index',
                    name: 'index',
                    component: index
                },
                {
                    path: '/home/buy',
                    name: 'buy',
                    component: buy
                },
                {
                    path: '/home/goodsDetail',
                    name: 'goodsDetail',
                    component: goodsDetail
                },
                {
                    path: '/home/sell',
                    name: 'sell',
                    component: sell
                },
                {
                    path: '/home/cart',
                    name: 'cart',
                    component: cart
                },
                {
                    path: '/userCenter',
                    name: 'userCenter',
                    component: userCenter
                }
            ]
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
