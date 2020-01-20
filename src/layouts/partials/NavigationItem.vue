<template>
  <q-item clickable @click="$emit('click')" :to="path" v-ripple class="navigation-item q-pa-none flex-center" :exact="exact" active-class="active">
    <q-icon :name="icon" />
    <q-tooltip anchor="center right" self="center left" v-if="title">{{ title }}</q-tooltip>
  </q-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    path: {
      type: String
    },
    exact: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  }
}
</script>
