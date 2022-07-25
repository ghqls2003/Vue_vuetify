import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/components/MainView.vue'
import DialogView from '@/components/function/DialogView.vue'
import CalendarView from '@/components/function/CalendarView.vue'
import ProgressView from '@/components/function/ProgressView.vue'
import SteppersView from '@/components/function/SteppersView.vue'
import DataIteratorsView from '@/components/function/DataIteratorsView.vue'
import TableView from '@/components/function/TableView.vue'
import VirtualScrollerView from '@/components/function/VirtualScrollerView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: MainView
    },
    {
      path: '/dialog',
      component: DialogView
    },
    {
      path: '/calendar',
      component: CalendarView
    },
    {
      path: '/progress',
      component: ProgressView
    },
    {
      path: '/steppers',
      component: SteppersView
    },
    {
      path: '/dataiterators',
      component: DataIteratorsView
    },
    {
      path: '/table',
      component: TableView
    },
    {
      path: '/virtual',
      component: VirtualScrollerView
    },
  ]
})

export default router