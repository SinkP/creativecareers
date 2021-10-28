<template lang="html">
  <div class="container_sample">
    <div class="container_title">
      <img class="image" :src="(icon)"> 
      <h3 class="name">
        {{ name }}
      </h3>
    </div>
    <p class="text">
      {{ text }}
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
        name: {
            title: String,
            default: '',
        },
        text: {
            text: String,
            default: '',
        },
    },
}
</script>
<style scoped lang="scss">
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
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: 0;
  text-align: left;
}
.text {
  width: 502px;
  margin-top: 15px;
}
</style>