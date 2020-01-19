<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer side="left" v-model="dialogOpen" :width="285">
      <div class="full-height flex">
        <div id="sectionSwitcher" class="flex column justify-between q-pt-lg">
          <!-- Top -->
          <div>
            <NavigationItem icon="mdi-coin" path="/" />
            <NavigationItem icon="mdi-forum-outline" path="/messages" />
          </div>
          <!-- Bottom -->
          <div>
            <NavigationItem icon="mdi-bell" path="/notifications" />
            <NavigationItem icon="mdi-newspaper" path="/news" />
            <NavigationItem icon="mdi-settings" path="/settings" />
          </div>
        </div>
        <div id="sectionContent" class="flex column full-height overflow-auto no-wrap">
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
  }
}
</script>
