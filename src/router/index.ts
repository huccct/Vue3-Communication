import type { RouteRecordRaw } from 'vue-router'

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/props',
    children: [
      {
        path: '/props',
        name: 'Props',
        component: () => import('@/views/props/index.vue'),
        meta: {
          titleKey: 'pages.props.title',
        },
      },
      {
        path: '/custom-event',
        name: 'CustomEvent',
        component: () => import('@/views/custom-event/index.vue'),
        meta: {
          titleKey: 'pages.customEvent.title',
        },
      },
      {
        path: '/event-bus',
        name: 'EventBus',
        component: () => import('@/views/event-bus/index.vue'),
        meta: {
          titleKey: 'pages.eventBus.title',
        },
      },
      {
        path: '/v-model',
        name: 'VModel',
        component: () => import('@/views/v-model/index.vue'),
        meta: {
          titleKey: 'pages.vModel.title',
        },
      },
      {
        path: '/attrs-listeners',
        name: 'AttrsListeners',
        component: () => import('@/views/attrs-listeners/index.vue'),
        meta: {
          titleKey: 'pages.attrs.title',
        },
      },
      {
        path: '/ref-children-parent',
        name: 'RefChildrenParent',
        component: () => import('@/views/ref-children-parent/index.vue'),
        meta: {
          titleKey: 'pages.ref.title',
        },
      },
      {
        path: '/provide-inject',
        name: 'ProvideInject',
        component: () => import('@/views/provide-inject/index.vue'),
        meta: {
          titleKey: 'pages.provideInject.title',
        },
      },
      {
        path: '/pinia',
        name: 'Pinia',
        component: () => import('@/views/pinia/index.vue'),
        meta: {
          titleKey: 'pages.pinia.title',
        },
      },
      {
        path: '/slot',
        name: 'Slot',
        component: () => import('@/views/slot/index.vue'),
        meta: {
          titleKey: 'pages.slot.title',
        },
      },
    ],
  },
]
