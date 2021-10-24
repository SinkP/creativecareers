<template lang="html">
  <div class="card">
    <h3 class="name">
      {{ name }}
    </h3>
    <p class="salary">
      {{ salary }}
    </p>
  </div>
</template>
<script>
export default {
  props: {
        name: {
            title: String,
            default: '',
        },
        salary: {
            text: String,
            default: '',
        },
    },
}
</script>
<style scoped lang="scss">
.card {
  width: 279px;
  height: 180px;
  padding: 18px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('~/assets/img/global/cardBg.png');
}
.name {
  font-family: Jost, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0;
  text-align: left;
  color: #FFF;
}
.salary {
  margin-top: 4px;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  color: #FFF;
}
</style>