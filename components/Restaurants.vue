<template>
  <div class="list">
    <div class="list__heading">
      Results
    </div>
    <ul v-if="restaurants.length > 0" class="list__content">
      <li
        v-for="({ restaurant }, index) in restaurants"
        :key="index"
        class="list__item"
      >
        <nuxt-link :to="restaurant.id" class="list__link">
          {{ restaurant.name }}
        </nuxt-link>
      </li>
    </ul>
    <div v-if="!isPagerDisabled" class="list__submit">
      <button
        @click="loadMore"
        :class="['button button--fluid', isLoading && 'button--loading']"
        :disabled="isLoading"
      >
        Show more
      </button>
    </div>
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
  computed: {
    isPagerDisabled() {
      return this.$store.state.isPagerDisabled
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
