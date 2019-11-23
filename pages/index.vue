<template>
  <div class="container">
    <categories :categories="categories" />
    <categories :categories="cuisines" />
    <restaurants :restaurants="restaurants" />
    <nuxt-child />
  </div>
</template>

<script>
import Categories from '~/components/Categories'
import Restaurants from '~/components/Restaurants'

export default {
  components: {
    Categories,
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
