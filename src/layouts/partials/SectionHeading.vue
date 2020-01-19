<template>
  <q-item class="section-heading">
    <q-item-section>
      {{ title }}
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
