<template lang="html">
  <div class="container_sample">
    <div class="container_title">
      <img class="image" :src="(icon)">
      <h3 class="name">
        {{ title }}
      </h3>
    </div>
    <p class="text">
      {{ description }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.container_sample {
  display: flex;
  flex-direction: column;
}
.container_title {
  display: flex;
  align-items: center;
}
.name {
  margin-left: 12px;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
}
.text {
  margin-top: 15px;
}
</style>
