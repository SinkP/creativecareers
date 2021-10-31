<template lang="html">
  <main class="home">
    <div>
      <h1 class="home__title">
        <span class="home__title--undefault">Помощь в карьере</span>
          от HR и топовых специалистов
      </h1>    
        <p class="home__text">
          Управление брендом искажает конвергентный медийный канал.
        </p>
      <DButton class="home__button">
        Начать поиск
      </DButton>
    </div>
    <img class="home-image" src="~/assets/img/home_image/4.svg">
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
<style lang="scss">
.home {
  width: 1400px;
  height: 715px;
  margin: 0 auto;
  padding-left: 184px;
  position: relative;
  display: flex;
  justify-content: space-between;
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
  left: 450px;
  top: -79px;
}
</style>