<template>
  <div>
    <q-list>
      <SectionHeading title="App Settings" />
      <SectionItem title="Transactions" icon="mdi-format-list-bulleted" />
    </q-list>
  </div>
</template>

<script>
import SectionHeading from '../partials/SectionHeading'
import SectionItem from '../partials/SectionItem'

export default {
  components: {
    SectionItem, SectionHeading
  }
}
</script>
