<template lang="html"> 
  <div class="main-layout"> 
    <DHeader />
    <Nuxt  class=""/>
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
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
@font-face {
    font-family: Geometric;
    src: url('~/assets/fonts/Geometric.ttf');
}
@font-face {
    font-family: OpenSans;
    src: url('~/assets/fonts/OpenSans.ttf');
}
@font-face {
    font-family: Jost;
    src: url('~/assets/fonts/Jost.ttf');
}
@font-face {
    font-family: Rubik;
    src: url('~/assets/fonts/Rubik.ttf');
}
.main-layout { 
  width: 100%;
  padding-bottom: 31px;
  background-color: #F5F6F7;
}
</style>

