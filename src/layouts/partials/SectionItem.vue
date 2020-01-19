<template>
  <q-item clickable @click="$emit('click')" :to="path" v-ripple class="section-item" :exact="exact" active-class="active">
    <q-item-section>
      {{ title }}
    </q-item-section>
    <q-item-section side>
      <q-icon :name="icon" />
    </q-item-section>
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
      type: String,
      required: true
    }
  }
}
</script>
