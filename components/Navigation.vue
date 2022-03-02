<template>
  <nav class="navigation">
    <nuxt-link
      v-for="item of list" :key="item.id"
      :to="`/${item.id}`" class="link"
    >
      {{ item.title }}
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  margin-right: 79px;
}

.link {
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-decoration: none;
  color: #1E2228;

  &:hover {
    text-decoration: underline;
  }
}

@include mobile {
  .navigation {
    margin-right: 0;
    gap: 16px;
    justify-content: space-between;
  }
}
</style>
