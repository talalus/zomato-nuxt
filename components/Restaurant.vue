<template>
  <div>
    <pre> {{ restaurant }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
