<template lang="html">
  <v-app>
    <div class="main-layout">
      <d-header v-if="$mq !== 'sm'" />
      <d-mobile-header v-if="$mq === 'sm'" />
      <div class="content">
        <nuxt />
      </div>
      <d-footer class="footer" />
    </div>
  </v-app>
</template>
<script>
import DHeader from '~/components/Header.vue';
import DMobileHeader from '~/components/MobileHeader.vue';
import DFooter from '~/components/Footer.vue';

export default {
  components: {
    DHeader,
    DFooter,
    DMobileHeader,
  },
};
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

@include mobile {
  .content {
    margin-top: 24px;
  }
}
</style>
