<template>
  <pre>
    {{ categories }}
  </pre>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
