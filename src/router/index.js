import Vue from 'vue'
import Router from 'vue-router'
import AppDownload from '@/components/AppDownload'
import forum from '@/components/forum'
import mastPro from '@/components/mastPro'
import OnlineStore from '@/components/OnlineStore'
import SmartisanOS from '@/components/SmartisanOS'
import SmilingCloud from '@/components/SmilingCloud'
import all from '@/components/towleve/all'
import bb from '@/components/towleve/bb'
import footprint from '@/components/towleve/footprint'
import home from '@/components/towleve/home'
import mobile from '@/components/towleve/mobile'
import rim from '@/components/towleve/rim'
import server from '@/components/towleve/server'
import thirdparty from '@/components/towleve/thirdparty'
import particulars from '@/templates/particulars'
import shoopcat from '@/templates/shoopcat'
import payment from '@/templates/payment'
import Subsucceed from '@/templates/Subsucceed'
import indent from '@/templates/indent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/AppDownload',
      name: 'AppDownload',
      component: AppDownload
    },
    {
      path: '/forum',
      name: 'forum',
      component: forum
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/mastPro',
      name: 'mastPro',
      component: mastPro
    },
    {
      path: '/OnlineStore',
      name: 'OnlineStore',
      component: OnlineStore,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'mobile',
          name: 'mobile',
          component: mobile
        },
        {
          path: 'all',
          name: 'all',
          component: all
        },
        {
          path: 'bb',
          name: 'bb',
          component: bb
        },
        {
          path: 'footprint',
          name: 'footprint',
          component: footprint
        },
        {
          path: 'rim',
          name: 'rim',
          component: rim
        },
        {
          path: 'server',
          name: 'server',
          component: server
        },
        {
          path: 'thirdparty',
          name: 'thirdparty',
          component: thirdparty
        },
        {
          path: 'particulars/:id/id/:key',
          name: 'particulars',
          component: particulars
        }
      ]
    },
    {
      path: '/shoopcat',
      name: 'shoopcat',
      component: shoopcat
    },
    {
      path: '/indent',
      name: 'indent',
      component: indent
    },
    {
      path: '/Subsucceed',
      name: 'Subsucceed',
      component: Subsucceed
    },
    {
      path: '/SmartisanOS',
      name: 'SmartisanOS',
      component: SmartisanOS
    },
    {
      path: '/SmilingCloud',
      name: 'SmilingCloud',
      component: SmilingCloud
    },
    {
      path: '*',
      redirect: '/OnlineStore/home'
    }
  ]
})
