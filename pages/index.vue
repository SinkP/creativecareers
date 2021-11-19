<template lang="html">
  <main class="home">
    <div class="home-wrapper">
      <div>
        <h1 class="home__title">
          <span class="home__title--undefault">Помощь в карьере</span>
            от HR и топовых специалистов
        </h1>
          <p class="home__text">
            Управление брендом искажает конвергентный медийный канал.
          </p>
        <DButton
          :options="{ nuxt: true, to: '/gamedev' }"
          class="home__button"
        >
          Начать поиск
        </DButton>
      </div>
      <img class="home-image" src="~/assets/img/home_image/4.svg">
      </div>
  </main>
</template>
<script>
import DButton from '~/components/global/Button.vue'
export default {
  components: {
    DButton,
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
  height: 715px;
  margin: 0 auto;
  padding-left: 64px;
  position: relative;
  display: flex;
  justify-content: space-between;
  background: transparent !important;
}
.home__title {
  max-width: 578px;
  max-height: 210px;
  margin-top: 149px;
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
  top: -79px;
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
</style>

<style lang="scss">
  .header {
    background-color: #F5F6F7;
  }
</style>
