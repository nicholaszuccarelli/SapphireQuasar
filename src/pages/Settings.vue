<template>
  <PageLayout title="Settings">
    <q-toggle label="Dark Mode" :value="isDark" @input="setMode" />
    <q-btn color="primary" label="Button" />

    <q-dialog :value="false">
      <q-card>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, numquam quas. Accusamus aliquid inventore molestias, possimus quae repudiandae suscipit tenetur voluptatibus. Beatae eligendi eveniet magni molestiae odit quod recusandae repudiandae.
      </q-card>
    </q-dialog>
  </PageLayout>
</template>

<script>
import PageLayout from '../layouts/partials/PageLayout'

export default {
  components: {
    PageLayout
  },
  computed: {
    isDark () {
      return this.$q.dark.isActive
    }
  },
  methods: {
    setMode (val) {
      this.$q.dark.set(val)
    }
  }
}
</script>
