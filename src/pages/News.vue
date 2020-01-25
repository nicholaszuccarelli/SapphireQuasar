<template>
  <PageLayout title="ECC News" view="hHr lpR lfr">
    <template v-slot:layout>
      <q-inner-loading :showing="loading" style="z-index: 1;">
        <q-spinner size="4em" />
      </q-inner-loading>

      <q-drawer side="right" :width="400">

      </q-drawer>
    </template>

    <NewsItem
      v-for="(item, key) in 7"
      :key="key"
      :item="item"
      class="q-mb-lg"
    />
  </PageLayout>
</template>

<script>
import PageLayout from '../layouts/partials/PageLayout'
import NewsItem from '../components/News/NewsItem'

export default {
  components: {
    PageLayout, NewsItem
  },
  data () {
    return {
      drawerOpen: false,
      loading: false,
      news: []
    }
  },
  methods: {
    loadNews () {
      this.$axios.get('https://medium.com/feed/@project_ecc').then((response) => {
        console.log(response)
      })
    }
  },
  mounted () {
    this.loadNews()
  }
}
</script>
