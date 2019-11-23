<template>
  <div class="filter">
    <div class="filter__title">
      Category
    </div>
    <div class="filter__content">
      <div class="filter__item" v-for="item in shortedList" :key="item.categories.id">
        <label>
          <input
            type="checkbox"
            name="filter"
            v-model="selected"
            :value="item.categories.id"
            :disabled="isLoading"
          >
          {{item.categories.name}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        isLoading: false
      }
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    computed: {
      shortedList() {
        return this.items.slice(0, 4)
      }
    },
    watch: {
      selected: async function(value) {
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

