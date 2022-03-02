<template lang="html">
  <header class="header">
    <div class="d-container _big">
      <div class="wrapper">
        <d-logo class="logo" />
        <app-search class="search" />
      </div>
      <div class="wrapper">
        <d-navigation :list="industries" />
        <d-socials />
      </div>
    </div>
  </header>
</template>
<script>
import DLogo from '~/components/global/Logo.vue';
import DNavigation from '~/components/Navigation.vue';
import DSocials from '~/components/global/Socials.vue';

export default {
  components: {
    DLogo,
    DSocials,
    DNavigation,
  },

  computed: {
    industries() {
      return this.$store.state.industries;
    },
  },
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 79px;
  display: flex;
  justify-content: center;

  .d-container {
    padding: 0;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
  }

  .wrapper {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-right: 53px;
  }

  .search {
    width: 411px;
  }
}

@include laptop {
  .header {
    .d-container {
      margin: 0 10px;
    }

    .search {
      max-width: 280px;
    }
  }
}
</style>
