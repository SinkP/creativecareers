<template lang="html">
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo-container">
        <DLogo />
      </div>
      <DAboutUs class="aboutus"/>
    </div>
    <div class="footer__container">
    <div class="footer__link-container">
      <a href="#" class="footer__link">
        Обратная связь
      </a>
      <a href="#" class="footer__link">
        Политика конфедициальности
      </a>
      <a href="#" class="footer__link">
        Правила использования
      </a>
    </div>
    <div class="footer_designed-by">
      <p class="footer__text footer__year">
        © 2021 Creative Careers
      </p>
    </div>
  </div>
</footer>
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
.footer {
  width: 1201px;
  max-width: 100%;
  margin: 0 auto;
  margin-top:auto;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 36px;
}
.footer__link {
  height: 23px;
  margin-left: 36px;
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 23.12px;
  color: #1E2228;
}
.footer__link:first-child {
  margin-left: 0;
}
.footer__link:hover {
  color: #365DE7;
}
.aboutus {
  margin-top: 18px;
}
.footer_designed-by {
  margin-top: 24px;
  display: flex;
}
.footer__year {
  margin-right: 32px;
}
.footer__text {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #79829A;
}
.flatonica {
  margin-left: 4px;
}

@media (max-width: 1200px) {
  .footer {
    padding: 0 20px;
    padding-top: 36px;
  }
}
</style>
