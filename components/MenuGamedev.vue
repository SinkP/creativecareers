<template lang="html">
  <div class="menu">
    <slot />
  </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.menu {
  width: 205px;
  padding: 14px;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0 24px 80px rgba(0, 0, 0, .07);
}
</style>
