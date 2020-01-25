<template>
  <div>
    <q-card class="bg-transparent shadow-0 news-item relative-position" v-ripple>
      <q-card-section class="text-h6">
        Hello World
      </q-card-section>
      <q-card-section class="q-pt-none text-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consequatur deleniti dolor dolore, facere fuga id impedit inventore magni minus perspiciatis quas quod recusandae rerum suscipit vitae, voluptas voluptatum.
      </q-card-section>
      <q-toolbar class="q-px-md">
        <span class="text-amber-8">1 Day Ago</span>
        <q-space />
        <q-btn flat icon="mdi-chevron-right" />
      </q-toolbar>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>
