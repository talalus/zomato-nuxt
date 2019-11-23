<template>
  <div class="filter">
    <div class="filter__title">
      Cuisines
    </div>
    <div class="filter__content filter__content--4">
      <div
        v-for="item in shortList"
        :key="item.cuisine.cuisine_id"
        class="filter__item"
      >
        <label>
          <input
            v-model="selected"
            :value="item.cuisine.cuisine_id"
            :disabled="isLoading"
            type="checkbox"
            name="filter"
          />
          {{ item.cuisine.cuisine_name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: [],
      isLoading: false
    }
  },
  computed: {
    shortList() {
      return this.items.slice(0, 12)
    }
  },
  watch: {
    async selected(value) {
      this.isLoading = true
      this.$store.commit('setFilter', { cuisines: value.join(',') })
      try {
        await this.$store.dispatch('search')
      } catch (e) {
        console.log(e)
      }
      this.isLoading = false
    }
  }
}
</script>
