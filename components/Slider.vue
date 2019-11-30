<template>
  <div>
    <div>{{ label }}</div>
    <vue-slider
      :value="value"
      @change="$emit('input', $event)"
      :min="min"
      :max="max"
      :processStyle="{ backgroundColor: '#50bebf' }"
      :railStyle="{ backgroundColor: '#f1f1f1', height: '12px' }"
      :dotStyle="{ border: '1px solid #50bebf' }"
      :tooltipStyle="{ backgroundColor: '#50bebf', borderColor: '#50bebf' }"
      :lazy="true"
      :disabled="disabled"
      tooltip="focus"
      dot-size="20"
    ></vue-slider>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>
