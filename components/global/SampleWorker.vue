<template lang="html">
  <nuxt-link :to="to" :href="href ? href : to" class="badge">
    <img class="icon" :src="(icon)">
    <h3 class="title">
      {{ title }}
    </h3>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '/',
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped lang="scss">
.badge {
  width: auto;
  height: 50px;
  margin-right: 18px;
  border-radius: 8px;
  padding: 12px 16px;
  background: #F5F6F7;
  display:inline-flex;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background: #ececec;
  }
}
.title {
  font-family: Jost, sans-serif;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
}
.icon {
  width: 20px;
  margin-right: 10px;
}
</style>
