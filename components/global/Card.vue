<template lang="html">
  <a href="#" class="card">
    <!-- <img class="image" :src="(icon)"> -->
    <h3 class="name">
      {{ name }}
    </h3>
    <p class="salary">
      {{ salary }}
    </p>
  </a>
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
        // icon: {
        //     text: String,
        //     default: '~/assets/img/global/cardBg.png',
        // },
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
  transition: 0.2s;
  justify-self: center;
  background-image: url('~/assets/img/global/cardBg.png');
}
.card:hover {
  margin-top: -5px;
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
  z-index: 2;
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
  z-index: 2;
}
.image {
  width: 279px;
  height: 180px;
  position: absolute;
  object-fit: cover;
  object-position: center;
}
</style>