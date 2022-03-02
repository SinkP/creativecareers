<template lang="html">
  <h1 class="d-title">
    <slot/>
  </h1>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.d-title {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 68px;
  line-height: 70px;
  letter-spacing: -.03em;
  color: #FFF;
}

@include mobile {
  .d-title {
    font-size: 36px;
    line-height: 52px;
  }
}
</style>
