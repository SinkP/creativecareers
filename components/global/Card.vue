<template lang="html">
  <nuxt-link to="/" class="card" :class="big ? '_big' : ''">
    <img class="image" :src="(icon)">
    <div class="shadow" />
    <h3 class="name">
      {{ name }}
    </h3>
    <p class="salary">
      {{ salary }}
    </p>
  </nuxt-link>
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
    big: {
      type: Boolean,
      default: false,
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

  &._big {
    min-width: 289px;
  }
}

.card:hover {
  margin-top: -5px;
}

.name {
  font-family: Jost, sans-serif;
  font-size: 20px;
  max-width: 100%;
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
  max-width: 100%;
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
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, 0.8) 80.43%);
}

.shadow {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, 0.8) 80.43%);
}
</style>
