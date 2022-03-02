<template>
  <app-input
    class="search"
    :options="{
      label: 'Поиск по индустриям и профессиям',
      solo: true,
      text: true,
      height: '42px',
      'prepend-inner-icon': '$magnify',
    }"
  />
</template>

<style lang="scss">
.search {
  width: 411px;
  overflow: hidden;


  ::v-deep {
    .v-input__prepend-inner {
      padding-left: 11px;
      padding-right: 10px;
    }
  }
}

@include mobile {
  .search {
    ::v-deep {
      .v-input__prepend-inner {
        padding-left: 12px !important;
        padding-right: 11px !important;
      }
    }
  }
  .input {
    border: inherit !important;

  }
}
</style>
