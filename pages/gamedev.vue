<template lang="html">
  <div class="direction">
    <div class="main_direction">
      <DNavigation :links="links" />
      <DTitle class="title_direction">
        Gamedev
      </DTitle>
      <p class="text_main-direction">
        В современном мире создание видеоигр является одним из наиболее крупных сегментов индустрии развлечений.
      </p>
      <img class="image" src="~/assets/img/industry/hend.png">
    </div>
    <div class="container_direction">
      <div class="menu_direction_wrapper">
        <DMenu class="direction-menu"
          :active="0"
          :list="menuLinks"
        />
      </div>
      <div class="basic_container">
        <div class="production_direction">
          <h3 class="subtitle">
            Production
            <div class="number_production">
              <p class="number_text">
                6 профессий
              </p>
            </div>
          </h3>
          <p class="text_production">
            Организуют процессы создания игры и следят за тем, чтобы игра была сделана в указанные сроки и бюджет
          </p>
          <div class="items_production">
            <DCard
              v-for="cardItem of cards"
              :key="cardItem.name"
              :big="true"
              :extra-big="$mq !== 'lg'"
              :name="cardItem.name"
              :icon="cardItem.icon"
            />
          </div>
        </div>
        <div class="production_direction">
          <h3 class="subtitle">
            Design
            <div class="number_production">
              <p class="number_text">
                6 профессий
              </p>
            </div>
          </h3>
          <p class="text_production">
            Придумывают концепт, сюжет и атмосферу игры, её внешний вид и то, как люди будут в неё играть
          </p>
          <div class="items_production">
            <DCard
              v-for="cardItem of cards"
              :key="cardItem.name"
              :big="true"
              :extra-big="$mq !== 'lg'"
              :name="cardItem.name"
              :icon="cardItem.icon"
            />
          </div>
        </div>
        <DSubscription
          class="subscription"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DTitle from '~/components/global/Title.vue'
import DCard from '~/components/global/Card.vue'
import DMenu from '~/components/global/Menu.vue'
import DSubscription from '~/components/Subscription.vue'
import DNavigation from '~/components/global/Navigation.vue'
import DSpecification from '~/components/profession/Specification.vue'
export default {
  components: {
    DTitle,
    DCard,
    DMenu,
    DSubscription,
    DNavigation,
    DSpecification,
  },
  data () {
    return {
      links: [
        {
          title: 'Главная',
          to: '/',
        },
        {
          title: 'Индустрии',
          to: '/',
        },
        {
          title: 'direction',
          to: '/',
        },
        {
          title: 'Геймдизайнер',
          to: '/',
        },
      ],
      specification: [
        {
          title: 'Геймдизайнер',
          description: 'Gamedev',
        },
        {
          title: 'Также известен как',
          description: 'Game Design, Game Developer',
        },
      ],
      menuLinks: [
        {
          title: 'Начало',
          href: '#fff',
        },
        {
          title: 'Начало',
          href: '#fff',
        },
        {
          title: 'Начало',
          href: '#fff',
        },
        {
          title: 'Начало',
          href: '#fff',
        },
        {
          title: 'Начало',
          href: '#fff',
        },
      ],
      cards: [
        {
          name: 'Геймдизайнер',
          icon: require ('~/assets/img/card/1.png'),
        },
        {
          name: 'Продюссер',
          icon: require ('~/assets/img/card/2.png'),
        },
        {
          name: 'Ассистент продюссера',
          icon: require ('~/assets/img/card/3.png'),
        },
        {
          name: 'Комьюнити менеджер',
          icon: require ('~/assets/img/card/4.png'),
        },
        {
          name: 'Маркетолог',
          icon: require ('~/assets/img/card/5.png'),
        },
        {
          name: 'Ассистент продюссера',
          icon: require ('~/assets/img/card/6.png'),
        },
      ],
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
}
.footer {
  padding-top: 36px;
  border-top: 2px solid rgba(0, 0, 0, 0.05);
}
.direction {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;

  .direction-menu {
    width: 205px;
  }
}
.main_direction {
  // width: 1200px;
  height: 450px;
  padding: 48px 103px;
  margin-top: 48px;
  margin-bottom: 83px;
  border-radius: 18px;
  position: relative;
  background: linear-gradient(98deg, #1E41BD 0%, #4C34DC 100%);
}
.image {
  position: absolute;
  right: 100px;
  top: 48px;
  border-radius: 12px;
}
.title_direction {
  margin-top: 48px;
  max-width: 75%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.text_main-direction {
  max-width: 424px;
  height: 75px;
  margin-top: 24px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.7);
  overflow: hidden;
  text-overflow: ellipsis;
}
.informers {
  position: absolute;
  bottom: -30px;
  left: 0;
  height: 81px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line_direction-informers {
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.12);
}
.salary_direction {
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specialties_direction {
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
.container_direction {
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}
.basic_container {
  max-width: 100%;
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
  max-width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 29px;
  grid-column-gap: 29px;
}
.number_production {
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  background: #E6E9EC;
  border-radius: 48px;
}
.number_text {
  padding: 0 12px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #1E2228;
}
.production_direction {
  margin-bottom: 64px;
}
.menu_direction {
  position: sticky;
  top: 48px;
}
.subscription {
  margin-bottom: 129px;
  justify-self: flex-start;
}

.subtitle {
  font-family: Jost, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: 0;
  text-align: left;
  display: flex;
  align-items: center;

  &._offset {
    padding-left: 8px;
  }

  &._small {
    font-size: 24px;
    line-height: 35px;
  }
}

@media (max-width: 1200px) {
  .container_direction {
    justify-content: center;
  }

  .direction-menu {
    display: none;
  }
}

@media (max-width: 1024px) {
  .direction {
    padding: 0 15px;
    box-sizing: border-box;
  }
  .image {
    display: none;
  }
  .items_production {
    grid-template-columns: 1fr;
  }

  .main_direction {
    padding: 18px 16px;
    margin: 26px 0;
    height: 100%;
  }

  .title {
    font-size: 36px;
    line-height: 52px;
    max-width: 100%;
    margin-top: 4px;
  }

  .text_main-direction {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 58px;
    margin-top: 10px;
  }
}
</style>
