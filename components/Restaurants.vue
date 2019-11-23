<template>
  <div>
    <ul v-if="restaurants.length > 0">
      <li v-for="({ restaurant }, index) in restaurants" :key="index">
        <nuxt-link :to="restaurant.id">
          {{ restaurant.name }}
        </nuxt-link>
      </li>
    </ul>
    <button
      @click="loadMore"
      :class="['button', isLoading && 'button--loading']"
      :disable="isLoading"
    >
      Show more
    </button>
  </div>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async loadMore() {
      this.isLoading = true
      await this.$store.dispatch('search', true)
      this.isLoading = false
    }
  }
}
</script>
