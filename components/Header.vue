<template lang="html">
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__logo-container">
          <DLogo class="logo" />
          <div class="header__logo-alpha">
            <h2 class="logo-alpha__text">alpha</h2>
          </div>
        </div>
        <div v-if="false" class="container_input">
          <v-text-field
            label="Поиск по индустриям и профессиям"
            solo
            flat
            class="input"
          ></v-text-field>
        </div>
      </div>
      <div class="header__container header__container--right">
        <a v-if="false" href="#" class="header__link">
          Индустрии
        </a>
        <DAboutUs class="aboutus"/>
      </div>
    </div>
  </header>
</template>
<script>
import DLogo from '~/components/global/Logo.vue'
import DAboutUs from '~/components/global/AboutUs.vue'
export default {
    components: {
    DLogo,
    DAboutUs
  }
}
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 79px;
  display: flex;
}
.header__wrapper {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header__container {
  width: auto;
  display: flex;
}
.header__container--right {
  justify-content: flex-end;
  align-items: center;
}
.header__logo-container {
  display: flex;
  align-items: center;
}
.header__logo-alpha {
  margin-top: 4px;
  margin-left: 6px;
  width: 40px;
  height: 15px;
  display: flex;
  justify-content: center;
  border-radius: 24px;
  border: 2px;
  border-color:#F5F6F7;
  background: #365DE7;
}
.logo-alpha__text {
  font-family: OpenSans, sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #F5F6F7;
}
.header__link {
  height: 22px;
  margin-left: 32px;
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  z-index: 2;
  color: #1E2228;
}
.header__link:hover {
  color: #365DE7;
}
.aboutus {
  margin-left: 79px;
  z-index: 2;
}
.container_input {
  max-width: 411px;
  width: 100%;
  height: 100%;
  max-height: 42px;
  margin-left: 53px;
  margin-top: 15px;
}
.input {
  width: 100%;
  height: 42px;
  background: #FFF;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 128px;
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #7B7B7B;
}

@media (max-width: 1200px) {
  .header {
    padding: 0 20px;
  }
}
</style>
