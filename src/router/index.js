import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first.vue'
import record from '@/components/record.vue'
import question from '@/components/question.vue'
import { Field, Header, TabContainer, TabContainerItem, Cell, Button } from 'mint-ui'

Vue.component(Button.name, Button)
Vue.component(Field.name, Field)
Vue.component(Cell.name, Cell)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Header.name, Header)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/question',
      name: 'question',
      component: question
    }
  ]
})
