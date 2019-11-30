<template>
  <div>
    <slider
      :min="0"
      :max="5"
      :disabled="isLoading"
      v-model="range"
      label="Rating"
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
        return this.$store.state.filter.ratingRange
      },
      async set(value) {
        this.isLoading = true
        this.$store.commit('setFilter', {
          ratingRange: value
        })
        await this.$store.dispatch('search')
        this.isLoading = false
      }
    }
  }
}
</script>
