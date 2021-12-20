<template lang="html">
  <main class="home">
    <div class="home-wrapper">
      <h1 class="home__title">
        <span class="home__title--undefault">Помощь в карьере</span>
        Всё о работе в
        игровой индустрии
      </h1>
        <p class="home__text">
          Узнай, какие знания и навыки тебе необходимы, чтобы попасть в GameDev
        </p>
      <DButton
        :options="{ nuxt: true, to: '/industries' }"
        class="home__button"
      >
        Начать поиск
      </DButton>
      <img
        v-if="$mq === 'lg'"
        class="home-image"
        src="~/assets/img/home_image/4.svg"
      >
      <img
        v-if="$mq !== 'lg'"
        class="home-image _mobile"
        src="~/assets/img/home_image/home.png"
      >
    </div>
  </main>
</template>
<script>
import DButton from '~/components/global/Button.vue'
export default {
  components: {
    DButton,
  },
  head() {
    return {
      title: `Кем стать в игровой индустрии. Выбор профессии`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Как определиться с выбором, полное описание профессий со способами обучения',
        }
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home-wrapper {
  max-width: 1200px !important;
  width: 100%;
  margin: 0 auto;
  padding-left: 64px;
  position: relative;
  background: transparent !important;
  margin-top: 149px;
  margin-bottom: 149px;
}
.home__title {
  max-width: 578px;
  max-height: 210px;
  font-family: Jost, sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: -0.03em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
}
.home__title--undefault {
  font-weight: 700;
  color: #365DE7;
}
.home__text {
  margin-top: 24px;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0;
  text-align: left;
}
.home__button {
  margin-top: 32px;
}
.home-image {
  position: absolute;
  width: 947px;
  height: 900.46px;
  left: 435px;
  top: -219px;
  pointer-events: none;
}

@media (max-width: 1400px) {
  .home {
    padding-left: 50px;
  }

  .home-image {
    left: 300px;
  }
}
@media (max-width: 1024px) {
  .home {
    padding-left: 0;

    &__button {
      width: 100%;
      margin-top: 24px;
    }
  }
  .home-wrapper {
    padding-left: 15px;
    padding-right: 15px;
    height: 100%;
    margin-bottom: 60px;
    margin-top: 32px;
  }
  .home__title {
    font-size: 38px;
    line-height: 44px;
  }
  .home__text {
    margin-top: 14px;
    font-size: 14px;
  }
  .home-image {
    position: static;
    max-width: 320px;
    margin: 0 auto;
    margin-top: 60px;
    height: auto;
    left: 0;
    margin-left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>

<style lang="scss">
  .header {
    background-color: #F5F6F7 !important;
  }
</style>
