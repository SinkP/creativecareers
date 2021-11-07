<template lang="html">
  <div class="menu">
    <a
      v-for="(item, index) of list"
      :key="item"
      :href="item.href"
      :class="active === index ? '_active' : ''"
      class="link"
    >
      {{ item.title }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Number,
      default: 0,
    }
  }
}
</script>
<style scoped lang="scss">
.menu {
  width: 284px;
  padding: 14px;
  border-radius: 12px;
  background: #FFF;
}

.link {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #79829A;
  transition: 0.3s;

  &._active {
    background: #F5F6F7;
    font-weight: 600;
    color: #000;
  }

  &:hover {
    background: #F5F6F7;
  }
}
</style>
