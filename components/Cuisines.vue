<template>
  <div class="filter">
    <div class="filter__title">
      Cuisines
    </div>
    <div class="filter__content filter__content--4">
      <div class="filter__item" v-for="item in shortList" :key="item.cuisine.cuisine_id">
        <label>
          <input
            type="checkbox"
            name="filter"
            v-model="selected"
            :value="item.cuisine.cuisine_id"
            :disabled="isLoading"
          >
          {{item.cuisine.cuisine_name}}
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
      shortList() {
        return this.items.slice(0, 12)
      }
    },
    watch: {
      selected: async function(value) {
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

