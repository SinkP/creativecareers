<template lang="html">
  <v-btn 
  class="button"
  color="#365DE7"
  min-height="62px"
  min-width="212px"
  >
    <p class="button__text">
      <slot/>
    </p>
  </v-btn>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
.button {
  height: 62px;
  width: 212px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
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
}
</style>