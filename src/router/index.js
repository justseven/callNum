import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
import lineup from '../views/lineup/lineup.vue'
import showinfo from '../views/showinfo/showinfo.vue'
import officeinfo from '../views/showinfo/officeinfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
		{
		  path: '/lineup',
		  name: 'lineup',
		  component: lineup
		},
		{
		  path: '/showinfo',
		  name: 'showinfo',
		  component: showinfo
		},
		{
		  path: '/officeinfo',
		  name: 'officeinfo',
		  component: officeinfo
		},
  ]
})
