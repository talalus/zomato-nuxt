<template>
  <div class="grid">
    <div class="grid__row">
      <categories :items="categories" class="grid__col grid__col--2" />
      <cuisines :items="cuisines" class="grid__col grid__col--6" />
    </div>
    <div class="grid__row grid__row--dark">
      <restaurants :restaurants="restaurants" class="grid__col grid__col--4" />
      <div class="grid__col grid__col--8">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import Categories from '~/components/Categories'
import Cuisines from '~/components/Cuisines'
import Restaurants from '~/components/Restaurants'

export default {
  components: {
    Categories,
    Cuisines,
    Restaurants
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    cuisines() {
      return this.$store.state.cuisines
    },
    restaurants() {
      return this.$store.state.restaurants
    }
  },
  async fetch({ store, error }) {
    try {
      await Promise.all([
        store.dispatch('getCategories'),
        store.dispatch('getCuisines'),
        store.dispatch('search')
      ])
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  methods: {
    async search() {
      await this.$store.dispatch('search')
    }
  }
}
</script>
