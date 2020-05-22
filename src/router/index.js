import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
      {
          path: '/',
          components: {
              default: () => import('../views/CarouselList.vue'),
              MiShangou: () => import('../views/MiShangou.vue'),
              MiPhone: () => import('../views/MiPhone.vue')
          },
      },
  ];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
