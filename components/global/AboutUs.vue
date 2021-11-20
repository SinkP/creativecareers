<template lang="html">
  <div class="au">
    <v-btn
      v-for="(soc, index) of socs"
      :key="soc.href"
      :color="index === hover ? soc.color : ''"
      rounded
      flat
      fab
      :href="soc.href"
      class="au__button"
      @mouseover="setHover(index)"
      @mouseout="setHover(-1)"
    >
      <img
        v-show="index === hover"
        class="au__button-logo au__button-logo--instagram"
        :src="require(`~/assets/img/global/${soc.name}-hover.svg`)"
      >
      <img
        v-show="index !== hover"
        class="au__button-logo au__button-logo--instagram"
        :src="require(`~/assets/img/global/${soc.name}.svg`)"
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
  },
}
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
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.09);

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
.au__button-logo--instagram {
  width: 16px;
}
</style>
