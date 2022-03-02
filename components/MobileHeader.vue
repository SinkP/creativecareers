<template>
  <header class="mobile-header">
    <v-btn
      fab
      rounded
      class="header-button"
      width="32px"
      height="32px"
      color="#ffffff"
      @click="handleClickSearch"
    >
      <v-icon
        size="14px"
      >
        $magnify
      </v-icon>
    </v-btn>
    <app-dialog v-model="search">
      <app-search class="search-input" />
    </app-dialog>
    <d-logo />
    <v-btn
      fab
      rounded
      class="header-button"
      width="32px"
      height="32px"
      color="#ffffff"
      @click="handleClickMenu"
    >
      <v-icon
        size="12px"
      >
        $menu
      </v-icon>
    </v-btn>
    <app-dialog v-model="menu" content-class="navigation-menu">
      <d-navigation :list="industries" />
      <d-socials />
    </app-dialog>
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
  data() {
    return {
      search: false,
      menu: false,
    };
  },

  computed: {
    industries() {
      return this.$store.state.industries;
    },
  },

  methods: {
    handleClickSearch() {
      this.search = true;
      this.menu = false;
    },
    handleClickMenu() {
      this.menu = true;
      this.search = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-header {
  width: 100%;
  height: 62px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  position: fixed;
  top: 0;
  z-index: 9999;

  .header-button {
    box-shadow: 0 0 12px rgba(0, 0, 0, .09) !important;
  }

  ::v-deep {
    .v-dialog__content {
      top: 39px;
      align-items: flex-start;
    }
  }
}
</style>

<style lang="scss">
.navigation-menu {
  .dialog-content {
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .navigation {
    margin-bottom: 16px;
  }
}
</style>
