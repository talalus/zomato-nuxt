<template>
  <div>
    <ul v-if="restaurants.length > 0">
      <li v-for="{ restaurant } in restaurants" :key="restaurant.id">
        <nuxt-link :to="restaurant.id">
          {{ restaurant.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
