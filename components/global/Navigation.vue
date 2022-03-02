<template>
  <nav class="pages">
    <nuxt-link
      v-for="link of links"
      :key="link.title"
      :to="link.to"
      class="page"
    >
      {{ link.title }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.pages {
  color: #9F9CE9;
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.page {
  color: #9F9CE9;
  letter-spacing: .5px;

  &::after {
    content: "/";
    margin: 0 14px;
    font-weight: 100;
  }

  &:last-child {
    color: #fff;
    &::after {
      content: "";
    }
  }
}

@include mobile {
  .page {
    letter-spacing: .5px;
    line-height: 1.35;

    &::after {
      margin: 0 4px;
    }
  }
}
</style>
