<template lang="html">
  <nuxt-link
    :to="to"
    class="card"
    :class="[big ? '_big' : '', extraBig ? '_extra-big' : '']"
  >
    <img class="image" :src="(picture)">
    <div class="shadow" />
    <h3 class="d-title">
      {{ title }}
    </h3>
    <p class="salary">
      {{ salary }}
    </p>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    salary: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    big: {
      type: Boolean,
      default: false,
    },
    extraBig: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      picture: this.image,
    };
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
  transition: .2s;
  justify-self: center;

  &._big {
    min-width: 289px;
  }

  &._extra-big {
    width: 100%;
  }
}

.card:hover {
  margin-top: -5px;
  margin-bottom: 5px;
}

.d-title {
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
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, .8) 80.43%);
}

.shadow {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(32, 32, 32, 0) 43.15%, rgba(32, 32, 32, .8) 80.43%);
}
</style>
