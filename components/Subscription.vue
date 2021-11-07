<template lang="html">
  <div class="subscription">

    <h3 class="title_subscription">
      <span class="title_modified">Подпишитесь</span> на рассылку новых профессий в каталоге
    </h3>
    <div class="right_block">
      <div class="input">
        <v-input
          class="item_input"
        >
          <v-text-field flat solo background-color="rgba(0, 0, 0, 0)" label="Введите e-mail"></v-text-field>
        </v-input>
        <v-btn
          elevation="0"
          class="button"
          height="41px"
          width="125px"
          color="#365DE7"
        >Подписаться</v-btn>
      </div>
      <div class="agreement">
        <v-checkbox
          color="#365DE7"
          hide-details
          class="checkbox"
        >
        </v-checkbox>
        <p class="text_agreement">
          Принимаю условия <nuxt-link to="/" class="link_agreement">соглашения</nuxt-link> и <nuxt-link to="/" class="link_agreement">политики конфиденциалььности</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>

.subscription {
  max-width: 925px;
  width: 100%;
  height: 132px;
  padding: 28px 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #FFF 0%, #FFF 52.6%, #FCFCFC 80.73%);
  border: 4px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 12px;
}
.title_subscription {
  max-width: 321px;
  width: 100%;
  height: 60px;
  font-family: Jost,sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0.08px;
}
.title_modified {
  color: #365DE7;
}
.input {
  width: 360px;
  height: 49px;
  display: flex;
  border: 1px solid #E3E5EA;
  box-sizing: border-box;
  border-radius: 8px;
  z-index: 1;

  ::v-deep {
    .v-label {
      font-size: 14px;
      line-height: 17px;
      color: #79829A;
      top: calc(50% - 9px) !important;
    }
    .v-text-field.v-text-field--enclosed > .v-input__control > .v-input__slot {
      padding: 0 16px !important;
    }
  }
}
.item_input {
  width: 200px;
  height: 49px;
  font-family: Rubik, sans-serif;
}
.button {
  margin: 3px;
  font-family: Rubik, sans-serif;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: left;
  border-radius: 8px;

  ::v-deep {
    .v-btn__content {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }
}
.agreement {
  margin-top: 12px;
  display: flex;
  position: relative;
  align-items: center;
  z-index: 2;

  ::v-deep {
    .v-input {
      margin: 0 !important;
      padding: 0 !important;
    }
  }
}
.text_agreement {
  margin-top: 2px;
  font-family: Rubik, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0;
  text-align: left;
  color: #1E2228;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.link_agreement {
  color: #79829A;
}
</style>
