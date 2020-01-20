<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer side="left" v-model="dialogOpen" :width="285" id="layoutDrawer" :mini="!hasDefinedSidebar">
      <div class="full-height flex">
        <div id="sectionSwitcher" class="flex column justify-between q-pt-lg">
          <!-- Top -->
          <div>
            <NavigationItem icon="mdi-coin" path="/coin" title="Sapphire" />
            <NavigationItem icon="mdi-forum-outline" path="/messages" title="Messages" />
          </div>
          <!-- Bottom -->
          <div>
            <NavigationItem icon="mdi-bell" path="/notifications" title="Notifications" />
            <NavigationItem icon="mdi-newspaper" path="/news" title="News" />
            <NavigationItem icon="mdi-settings" path="/settings" title="Settings" />
          </div>
        </div>
        <div id="sectionContent" class="flex column full-height overflow-auto no-wrap" v-if="hasDefinedSidebar">
          <div class="text-center q-py-xl">
            <img src="./../statics/logo.png" />
          </div>
          <router-view name="sidebar" id="routeContent" class="flex column justify-between full-height q-gutter-md" />
        </div>
      </div>
    </q-drawer>

    <q-page-container class="relative-position">
      <q-page>
        <router-view class="absolute-full" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import NavigationItem from './partials/NavigationItem'

export default {
  components: {
    NavigationItem
  },
  data () {
    return {
      dialogOpen: true
    }
  },
  watch: {
    '$route' () {
      this.checkRootPath()
    }
  },
  computed: {
    // Check that the sidebar has a defined component
    hasDefinedSidebar () {
      const match = this.$route.matched.find(item => Object.keys(item.components).includes('sidebar'))
      return match && !!match.components.sidebar
    }
  },
  methods: {
    checkRootPath () {
      if (this.$route.path === '/') {
        this.$router.push({
          path: '/coin'
        })
      }
    }
  },
  mounted () {
    this.checkRootPath()
  }
}
</script>
