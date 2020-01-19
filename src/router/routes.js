import MainSidebar from '../layouts/sidebars/Main'
import SettingsSidebar from '../layouts/sidebars/Settings'

import Index from '../pages/Index'
import Send from '../pages/Send'
import Settings from '../pages/Settings'

function render (defaultComp, sidebarComp = MainSidebar) {
  return {
    default: defaultComp,
    sidebar: sidebarComp
  }
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        components: render(Index)
      },
      {
        path: 'send',
        components: render(Send)
      },
      {
        path: 'settings',
        components: render(Settings, SettingsSidebar)
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
