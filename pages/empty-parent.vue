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
import { mapState } from 'vuex'
import * as ChildStore from '~/store-modules/empty-parent/child'

export default {
  name: 'EmptyParentPage',
  asyncData({ app }) {
    app.$registerStore({
      namespaces: ['empty-parent', 'child'],
      module: ChildStore,
    })
  },
  computed: {
    ...mapState({
      title: (state) => state['empty-parent'].child.title,
    }),
    // ...mapGetters({
    //   title: 'empty-parent/child/title',
    // }),
  },
  beforeCreate() {
    this.$registerStore({
      namespaces: ['empty-parent', 'child'],
      module: ChildStore,
    })
  },
}
</script>
