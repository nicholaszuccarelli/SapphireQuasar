<template>
  <div>
    <q-list>
      <SectionHeading title="Wallet" />
      <SectionItem title="Overview" icon="mdi-currency-usd" path="/coin" exact />
      <SectionItem title="Send" icon="mdi-send" path="/coin/send" />
      <SectionItem title="Receive" icon="mdi-download" />
      <SectionItem title="Transactions" icon="mdi-format-list-bulleted" />

      <SectionHeading title="Services" />
      <SectionItem title="Contacts" icon="mdi-contacts" />
    </q-list>
    <div>
      <div class="q-pa-md text-center">
        <div>
          <div>Syncing 25%</div>
          <q-linear-progress :value="25" stripe class="q-my-sm" color="green" />
          <div>Active Connections: 4</div>
        </div>
        <div class="q-mt-md">
          <span class="dot bg-green q-mr-xs" />
          <span class="text-green">Blockchain Connected</span>
        </div>
      </div>
      <SectionItem title="Donate" icon="mdi-gift" />
    </div>
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
