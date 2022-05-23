<template>
  <v-row>
    <v-col class="text-center">
      <h1>register-store-in-async-data/data</h1>
      <div v-for="{ name } in data1" :key="name">{{ name }}</div>
      <hr />
      <h1>register-store-in-async-data/nested/data</h1>
      <div v-for="{ name } in data2" :key="name">{{ name }}</div>
      <hr />
      <h1>
        register-store-in-async-data/data +
        register-store-in-async-data/nested/data
      </h1>
      <div v-for="{ name } in data" :key="name">{{ name }}</div>
      <hr />
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
import * as RegisterStoreInAsyncData from '~/store-modules/register-store-in-async-data'
import * as RegisterStoreInAsyncDataNested from '~/store-modules/register-store-in-async-data/nested'

export default {
  name: 'RegisterStoreInAsyncData',
  async asyncData({ app, store }) {
    app.$registerStore({
      path: 'register-store-in-async-data',
      module: RegisterStoreInAsyncData,
    })
    app.$registerStore({
      path: 'register-store-in-async-data/nested',
      module: RegisterStoreInAsyncDataNested,
    })

    await store.dispatch('register-store-in-async-data/fetchData')
    let data = store.getters['register-store-in-async-data/data']
    await store.dispatch('register-store-in-async-data/nested/fetchData')
    data = data
      .concat(store.getters['register-store-in-async-data/nested/data'])
      .map(({ name }) => ({ name: name + '1' }))

    return {
      data,
    }
  },
  computed: {
    ...mapGetters({
      data1: 'register-store-in-async-data/data',
      data2: 'register-store-in-async-data/nested/data',
    }),
  },
  beforeCreate() {
    this.$registerStore({
      path: 'register-store-in-async-data',
      module: RegisterStoreInAsyncData,
    })
    this.$registerStore({
      path: 'register-store-in-async-data/nested',
      module: RegisterStoreInAsyncDataNested,
    })
  },
}
</script>
