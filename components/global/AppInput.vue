<template>
  <v-text-field
    v-bind="options"
    class="input"
    width="100%"
    solo
    flat
    v-on="$listeners"
  />
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 42px;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 42px;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -.02em;
  color: #7B7B7B;
  background: transparent !important;

  ::v-deep {
    .v-icon__component {
      width: 16px;
      height: 16px;
    }
    .v-input__slot {
      background: transparent !important;
      min-height: auto !important;
      padding-left: 0 !important;
    }
    .v-input__icon {
      width: 16px;
      height: 16px;
      min-width: 16px;
    }
    .v-input__prepend-outer {
      margin-top: 13px;
      margin-left: 12px;
    }
  }
}

@include mobile {
  .input {
    ::v-deep {
      .v-label {
        font-size: 14px;
      }

      .v-input__prepend-inner {
        padding-left: 12px !important;
        padding-right: 10px !important;
      }
    }
  }
}
</style>
