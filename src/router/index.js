import Vue from 'vue'
import Router from 'vue-router'
import $store from '../store'

// layouts
import DefaultLayout from '@/layouts/default'

// views
import Home from '@/pages'
import PostDetail from '@/pages/_req_no'

Vue.use(Router)

const defaultViews = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      path: '',
      component: Home
    },
    {
      path: ':req_no',
      component: PostDetail
    }
  ]
}

const routes = [defaultViews]

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const categories = $store.getters['comento/CATEGORIES']

    if (!categories.length) {
      const { data } = await $store.dispatch('comento/GET_CATEGORIES')
      $store.commit('comento/SAVE_CATEGORIES', data.list)
    }

    next()
  } catch (err) {
    console.error('카테고리를 가져오는데 문제가 있습니다.')
    next()
  }
})

export default router
