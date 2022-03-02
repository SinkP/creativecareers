<template>
  <svg
    class="app-icon" :fill="fill"
    :stroke="stroke"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    fill: {
      type: String,
      default: '',
    },
    stroke: {
      type: String,
      default: '',
    },
  },
};
</script>
