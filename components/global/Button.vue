<template lang="html">
  <v-btn
    class="button"
    color="#365DE7"
    min-height="62px"
    min-width="212px"
    v-bind="options"
  >
    <p class="button__text">
      <slot/>
    </p>
  </v-btn>
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
<style lang="scss">
.button {
  height: 62px;
  width: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: #365DE7;
}

.button:hover {
  background: #0F36C1;
}

.button__text {
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  text-transform: none;
  font-weight: 700;
  line-height: 26px;
  color: #fff;
  margin-bottom: 0;
}
</style>
