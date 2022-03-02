<template>
  <div class="list">
    <ul class="list-container">
      <li v-for="item of list" :key="item" class="list-item">
        {{ item }}
      </li>
    </ul>
  </div>
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
.list {
  padding: 13px 30px;
  width: 100%;
  max-width: 538px;
  margin-top: 18px;
  border-radius: 8px;
  background: #F6F1FC;
}

.list-item {
  display: flex;
  align-items: center;
  margin-top: 0;
  list-style-type: none;
  font-family: "Rubik", sans-serif;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    display: inline-block;
    height: 4px;
    width: 4px;
    margin-right: 12px;
    border-radius: 50%;
    background-color: #000;
  }
}
</style>
