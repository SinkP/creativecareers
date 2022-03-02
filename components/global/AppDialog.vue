<template>
  <v-dialog
    :value="value"
    hide-overlay
    :content-class="getClasses"
    transition="fade-transition"
    @input="$emit('input', $event)"
  >
    <div class="blur" @click="$emit('input', false)" />
    <div class="dialog-content">
      <slot />
    </div>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: '',
    },
  },

  computed: {
    getClasses() {
      return `${this.contentClass} own-drawer`;
    },
  },
};
</script>

<style lang="scss">
  .dialog-content {
    border-top: 1px solid #F6F6F6;
    background-color: #ffffff;
    min-height: max-content;
  }
</style>

<style lang="scss">
.own-drawer {
  &.v-dialog {
    margin: 0;
  }

  .blur {
    backdrop-filter: blur(4px);
    height: 100vh;
    width: 100%;
    position: fixed;
    background: rgba(35, 37, 54, .4);
    z-index: -1;
  }
}
</style>
