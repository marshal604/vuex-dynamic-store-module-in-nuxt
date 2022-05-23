<template>
  <v-row>
    <v-col class="text-center">
      <div v-for="{ name } in data" :key="name">{{ name }}</div>
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
// import { mapGetters } from 'vuex'
import * as RegisterStoreInAsyncData from '~/store-modules/register-store-in-async-data'

export default {
  name: 'RegisterStoreInAsyncData',
  async asyncData({ app, store }) {
    app.$registerStore({
      path: 'register-store-in-async-data',
      module: RegisterStoreInAsyncData,
    })

    await store.dispatch('register-store-in-async-data/fetchData')
    const data = store.getters['register-store-in-async-data/data']

    console.log('fetchData', data)

    return {
      data,
    }
  },
  // computed: {
  //   ...mapGetters({
  //     data: 'register-store-in-async-data/data',
  //   }),
  // },
  beforeCreate() {
    this.$registerStore({
      path: 'register-store-in-async-data',
      module: RegisterStoreInAsyncData,
    })
  },
}
</script>
