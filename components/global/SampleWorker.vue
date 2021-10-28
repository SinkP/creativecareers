<template lang="html">
    <a href="#" class="cotnainer_worker">
      <img class="icon_worker" :src="(icon)">
      <h3 class="name_worker">
        {{ name }}
      </h3>
    </a>
</template>
<script>
export default {
  props: {
        icon: {
            type: String,
            default: '',
        },
        name: {
            title: String,
            default: '',
        },
    },
}
</script>
<style scoped lang="scss">
.cotnainer_worker {
  width: auto;
  height: 50px;
  margin-right: 18px;
  border-radius: 8px;
  padding: 12px 16px;
  background: #F5F6F7;
  display:inline-flex;
  align-items: center;
}
.name_worker {
  font-family: Jost, sans-serif;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0;
  text-align: left;
}
.icon_worker {
  width: 20px;
  margin-right: 10px;
}
</style>