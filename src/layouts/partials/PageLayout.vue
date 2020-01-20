<template>
  <q-layout container :view="view" @scroll="onScroll">
    <q-header id="pageLayout__header">
      <q-toolbar id="pageLayout__toolbar">
        <q-toolbar-title id="pageLayout__title" class="q-ml-xs">
          <slot name="title" v-if="hasTitleSlot" />
          <span v-else>{{ title || $route.meta.title }}</span>
        </q-toolbar-title>
        <slot name="toolbar" />
      </q-toolbar>
      <slot name="header" />
    </q-header>

    <q-page-container>
      <q-page class="q-pa-lg">
        <slot />
      </q-page>
    </q-page-container>

    <slot name="layout" />
  </q-layout>
</template>

<script>
export default {
  props: {
    view: {
      type: String,
      default: 'hHh lpR lfr'
    },
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    hasTitleSlot () {
      return !!this.$slots.title
    }
  },
  methods: {
    onScroll (pos) {
      this.$emit('scroll', pos.position)
    }
  }
}
</script>
