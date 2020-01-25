import MainSidebar from '../layouts/sidebars/Main'
import SettingsSidebar from '../layouts/sidebars/Settings'

import Index from '../pages/Index'
import Send from '../pages/Send'
import Settings from '../pages/Settings'
import News from './../pages/News'

function render (defaultComp, sidebarComp = undefined) {
  return {
    default: defaultComp,
    sidebar: sidebarComp
  }
}

const withPrefix = (prefix, routes) =>
  routes.map((route) => {
    route.path = prefix + '/' + route.path
    return route
  })

const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      ...withPrefix('coin', [
        {
          path: '',
          components: render(Index, MainSidebar)
        },
        {
          path: 'send',
          components: render(Send, MainSidebar)
        }
      ]),
      {
        path: 'news',
        components: render(News)
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
