import Vue from 'vue'
import VueRouter from 'vue-router'
import { Translate } from "@/plugins/translate";

Vue.use(VueRouter)

const routes = [
  {
    path: '/:locale',
    component: {
      render(c) {
        return c('router-view')
      }
    },
    beforeEnter: Translate.routeMiddleware,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: load('Home')
      },
      {
        path: 'about',
        name: 'About',
        component: load('About')
      }
    ]
  },
  {
    path: '*',
    redirect() {
      return `${Translate.getUserSupportedLocale()}/home`;
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = 'GoHomeGota'
router.afterEach((to) => {
	Vue.nextTick(() => {
		document.title = to.name || DEFAULT_TITLE;
	})
})

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

export default router
