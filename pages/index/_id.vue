<template>
  <div>
    <restaurant v-if="restaurant" :restaurant="restaurant" />
    <div v-else>
      No restaurant has been selected yet.
    </div>
  </div>
</template>

<script>
import Restaurant from '~/components/Restaurant'
export default {
  components: {
    Restaurant
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    restaurant() {
      return this.$store.state.currentRestaurant
    }
  },
  async fetch({ store, route, error }) {
    if (route.params.id) {
      try {
        await store.dispatch('getRestaurantById', route.params.id)
      } catch (e) {
        error({ statusCode: 404, message: 'Restaurant not found' })
      }
    }
  }
}
</script>

<style scoped></style>
