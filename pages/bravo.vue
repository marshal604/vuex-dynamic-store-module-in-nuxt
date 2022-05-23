<template>
  <v-row>
    <v-col class="text-center">
      <h1>{{ title }}</h1>
      <br />
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import * as bravoStoreModule from '~/store-modules/bravo'

export default {
  name: 'BravoPage',
  computed: {
    ...mapGetters({
      title: 'bravo/title',
    }),
  },
  beforeCreate() {
    this.$registerStore({
      pathList: ['bravo'],
      module: bravoStoreModule,
    })
  },
}
</script>
