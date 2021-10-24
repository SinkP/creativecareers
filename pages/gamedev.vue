<template lang="html">
  <div class="gamedev">
    <div class="main_gamedev">
      <nav class="pages">
        <nuxt-link to="/home" class="page">
          Главная
        </nuxt-link>
        /
        <nuxt-link to="#" class="page">
          Индустрии
        </nuxt-link>
        /
        <nuxt-link to="#" class="page page_active">
          Gamedev
        </nuxt-link>
      </nav>
      <DTitle class="title_gamedev">
        Gamedev
      </DTitle>
      <p class="text_main-gamedev">
        В современном мире создание видеоигр является одним из наиболее крупных сегментов индустрии развлечений.
      </p>
      <div class="informers">
        <div class='salary_gamedev'> 
          <p class="text_informers">
            средняя зарплата
          </p>
          <p class="numbers_informers">
            250 тыс. ₽
          </p>
        </div>
        <div class="line_gamedev-informers" />
        <div class="specialties_gamedev">
          <p class="text_informers">
            специальностей
          </p>
          <p class="numbers_informers">
            117 профессий
          </p>
        </div>
      </div>
      <img class="image_hend" src="~/assets/img/industry/hend.png">
    </div>
    <div class="container_gamedev">
      <div class="menu_gamedev">
        
      </div>
      <div class="basic_container">
        <div class="production_gamedev">
          <h3 class="subtitle">
            Production
          </h3>
          <p class="text_production">
            Организуют процессы создания игры и следят за тем, чтобы игра была сделана в указанные сроки и бюджет
          </p>
          <div class="items_production">
            <DCard 
            v-for="cardItem of cards"
              :key="cardItem.name"

              :name="cardItem.name"
              :salary="cardItem.salary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DTitle from '~/components/global/Title.vue'
import DCard from '~/components/global/Card.vue'
export default {
    components: {
      DTitle,
      DCard,
    },
    data () {
      return {
        cards: [
                {
                  name: 'Геймдизайнер',
                },
                {
                  name: 'Продюссер',
                },
                {
                  name: 'Ассистент продюссера',
                },
                {
                  name: 'Геймдизайнер',
                },
                {
                  name: 'Продюссер',
                },
                {
                  name: 'Ассистент продюссера',
                },
              ],
      }
    }
}
</script>
<style lang="scss">
.header {
  background-color: #fff;
}
.gamedev {
  width: 1200px;
  margin: 0 auto;
}
.main_gamedev {
  width: 1200px;
  height: 450px;
  padding: 48px 103px;
  margin-top: 48px;
  margin-bottom: 83px;
  border-radius: 18px;
  position: relative;
  background: linear-gradient(98deg, #1E41BD 0%, #4C34DC 100%);
}
.image_hend {
  position: absolute;
  left: 775px;
  top: 48px;
  border-radius: 12px;
}
.title_gamedev {
  margin-top: 48px;
}
.text_main-gamedev {
  width: 424px;
  margin-top: 24px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.7);
}
.informers {
  width: 312px;
  height: 44px;
  margin-top: 121px;
  margin-left: -83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F5F7F7;
}
.line_gamedev-informers {
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.12);
}
.salary_gamedev {
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specialties_gamedev {
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text_informers {
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #79829A;
}
.numbers_informers {
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #1E2228;
}
.container_gamedev {
  display: flex;
  justify-content: space-between;
}
.menu_gamedev {
  width: 205px;
  height: 364px;
  background: #FFF;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
}
.basic_container {
  width: 924px;
}
.text_production {
  margin-top: 7px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #79829A;
}
.items_production {
  width: 925px;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 34px;
  justify-content: space-between;
}
</style>