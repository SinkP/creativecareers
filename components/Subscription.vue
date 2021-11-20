<template lang="html">
  <div class="subscription">
    <h3 class="title">
      <span class="_modified">Подпишитесь</span> на рассылку новых профессий в каталоге
    </h3>
    <div class="form">
      <div class="input-wrapper">
        <v-input
          class="input"
        >
          <v-text-field
            flat
            solo
            background-color="rgba(0, 0, 0, 0)"
            label="Введите e-mail"
          />
        </v-input>
        <v-btn
          elevation="0"
          class="button"
          height="41px"
          width="125px"
          color="#365DE7"
        >
          Подписаться
        </v-btn>
      </div>
      <div class="agreement">
        <v-checkbox
          color="#365DE7"
          hide-details
          class="checkbox"
        >
        </v-checkbox>
        <span class="text-agreement">
          Принимаю условия <nuxt-link to="/" class="link_agreement">соглашения</nuxt-link>
          и
          <nuxt-link to="/" class="link_agreement">политики конфиденциалььности</nuxt-link>
        </span>
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
.title {
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

  ._modified {
    color: #365DE7;
  }
}
.input-wrapper {
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
.input {
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
  border-radius: 5px;

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
  max-width: 100%;
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

.form {
  max-width: 100%;
}

.text-agreement {
  margin-top: 2px;
  font-family: Rubik, sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0;
  text-align: left;
  color: #1E2228;
  overflow: hidden;
}
.link_agreement {
  text-decoration: underline;
  color: #79829A;
}

@media (max-width: 1024px) {
  .subscription {
    padding: 24px 15px;
    height: auto;
    flex-direction: column;
  }

  .agreement {
    // display: none;
    max-width: 100%;
  }

  .title {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }

  .input {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
  }

  .input-wrapper {
    width: 100%;
  }

  .button {
    width: 100%;
  }
}
</style>
