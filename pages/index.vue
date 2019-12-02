<template>
  <div class="content">
    <div class="content__top">
      <div class="grid">
        <div class="grid__row">
          <categories :items="categories" class="grid__col grid__col--2" />
          <cuisines :items="cuisines" class="grid__col grid__col--6" />
          <div class="grid__col grid__col--4">
            <rating-range />
            <price-range />
          </div>
        </div>
      </div>
    </div>
    <nuxt-child class="content__main" />
    <div class="content__side">
      <restaurants :restaurants="restaurants" />
    </div>
  </div>
</template>

<script>
import Categories from '~/components/Categories'
import Cuisines from '~/components/Cuisines'
import Restaurants from '~/components/Restaurants'
import PriceRange from '~/components/PriceRange'
import RatingRange from '~/components/RatingRange'

export default {
  components: {
    Categories,
    Cuisines,
    Restaurants,
    PriceRange,
    RatingRange
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
