<template>
  <q-item clickable @click="$emit('click')" :to="path" v-ripple class="navigation-item q-pa-none flex-center" :exact="exact" active-class="active">
    <q-icon :name="icon" />
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
    }
  }
}
</script>
