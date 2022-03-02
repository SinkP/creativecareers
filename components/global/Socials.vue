<template lang="html">
  <div class="au">
    <v-btn
      v-for="(soc, index) of socs"
      :key="soc.href"
      :color="index === hover ? soc.color : ''"
      rounded
      fab
      :href="soc.href"
      class="au__button"
      width="32px"
      height="32px"
      @mouseover="setHover(index)"
      @mouseout="setHover(-1)"
    >
      <img
        class="au__button-logo"
        :src="getPath(index, soc.name)"
      >
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: -1,
      socs: [
        {
          name: 'instagram',
          href: 'https://www.instagram.com/creativecareers.ru',
          color: '#EA0169',
        },
        {
          name: 'facebook',
          href: 'https://www.facebook.com/creativecareers.ru ',
          color: '#4D7BE2',
        },
        {
          name: 'vk',
          href: 'https://vk.com/creativecareers',
          color: '#4787ED',
        },
      ],
    };
  },
  methods: {
    setHover(index) {
      this.hover = index;
    },
    getPath(index, name) {
      if (index === this.hover) {
        return require(`@/assets/img/global/${name}-hover.svg`);
      }
      return require(`@/assets/img/global/${name}.svg`);
    },
  },
};
</script>
<style scoped lang="scss">
.au {
  height: 32px;
  display: flex;
}

.au__button {
  width: 32px;
  height: 32px;
  margin: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #FFF;
  box-shadow: 0 0 12px rgba(0, 0, 0, .09) !important;
  transition: .3s;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

.au__button-logo {
  width: 18px;
}
</style>
