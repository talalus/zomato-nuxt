<template>
  <div class="filter">
    <div class="filter__title">
      Category
    </div>
    <div class="filter__content">
      <div
        v-for="item in shortedList"
        :key="item.categories.id"
        class="filter__item"
      >
        <label>
          <input
            v-model="selected"
            :value="item.categories.id"
            :disabled="isLoading"
            type="checkbox"
            name="filter"
          />
          {{ item.categories.name }}
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
    shortedList() {
      return this.items.slice(0, 4)
    }
  },
  watch: {
    async selected(value) {
      this.isLoading = true
      this.$store.commit('setFilter', { category: value.join(',') })
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
