<template lang="html">
  <a href="#" class="card">
    <img class="image" :src="(icon)">
    <div class="shadow" />
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
            type: String,
            default: '',
        },
        salary: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: 0.2s;
  justify-self: center;
}
.card:hover {
  margin-top: -5px;
}
.name {
  font-family: Jost, sans-serif;
  font-size: 20px;
  width: 254px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0;
  text-align: left;
  color: #FFF;
  z-index: 2; 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}
.salary {
  margin-top: 4px;
  width: 254px;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0;
  text-align: left;
  color: #FFF;
  z-index: 2;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
}
.image {
  width: 279px;
  height: 180px;
  left: 0;
  bottom: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, 0.8) 80.43%);
}
.shadow {
  width: 279px;
  height: 180px;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, 0.8) 80.43%);
}
</style>