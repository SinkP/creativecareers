<template lang="html">
  <div class="main-layout">
    <DHeader  />
    <div class="content">
      <Nuxt  />
    </div>
    <DFooter class="footer" />
  </div>
</template>
<script>
import DHeader from '~/components/Header.vue'
import DFooter from '~/components/Footer.vue'
export default {
  components: {
    DHeader,
    DFooter
  }
}
</script>
<style lang="scss">
.main-layout {
  width: 100%;
  min-height: 100vh;
  padding-bottom: 31px;
  background-color: #F5F6F7;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1 0 auto;
    max-width: 100%;
  }
  .footer {
    flex-shrink: 0;
  }
}
</style>

