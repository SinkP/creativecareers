<template lang="html"> 
  <div class="main-layout"> 
    <DHeader  />
    <Nuxt  />
    <DFooter />
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
  padding-bottom: 31px;
  background-color: #F5F6F7;
}
</style>

