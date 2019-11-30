<template>
  <div>
    <slider
      :min="1"
      :max="4"
      :disabled="isLoading"
      v-model="range"
      label="Cost"
    />
  </div>
</template>

<script>
import Slider from '~/components/Slider'
export default {
  components: {
    Slider
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    range: {
      get() {
        return this.$store.state.filter.priceRange
      },
      async set(value) {
        this.isLoading = true
        this.$store.commit('setFilter', {
          priceRange: value
        })
        await this.$store.dispatch('search')
        this.isLoading = false
      }
    }
  }
}
</script>
