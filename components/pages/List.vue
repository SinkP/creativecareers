<template lang="html">
  <div class="direction">
    <div class="main_direction">
      <d-navigation :links="navigation" />
      <d-title class="title_direction">
        {{ title }}
      </d-title>
      <p class="text_main-direction">
        {{ description }}
      </p>
      <img class="image" src="~/assets/img/industry/hend.png">
    </div>
    <div class="container_direction">
      <div class="menu_direction_wrapper">
        <d-menu
          class="direction-menu"
          :active="activeAnchor"
          :list="getAnchorLinks"
        />
      </div>
      <div class="basic_container">
        <div
          v-for="(department, index) of departments"
          :id="replaceSpaces(department.title)"
          :key="department.title"
          v-view="viewHandler.bind(this, ...index)"
          class="department"
        >
          <h3 class="department-title">
            {{ department.title }}
            <div class="department-count">
              <p>
                {{ department.cards.length }} {{ getProfessionCase(department.cards.length) }}
              </p>
            </div>
          </h3>
          <p class="department-description">
            {{ department.description }}
          </p>
          <div class="departments-cards">
            <d-card
              v-for="card of department.cards"
              :key="card.name"
              :big="true"
              :extra-big="$mq !== 'lg'"
              :title="card.title"
              :to="`industries/${card.id}`"
              :image="card.image ? card.image : getRandomPicture()"
            />
          </div>
        </div>
        <d-subscription
          class="subscription"
        />
      </div>
    </div>
  </div>
</template>
<script>
import DTitle from '~/components/global/Title.vue';
import DCard from '~/components/global/Card.vue';
import DMenu from '~/components/global/Menu.vue';
import DSubscription from '~/components/Subscription.vue';
import DNavigation from '~/components/global/Navigation.vue';

export default {
  components: {
    DTitle,
    DCard,
    DMenu,
    DSubscription,
    DNavigation,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    navigation: {
      type: Array,
      default: () => [],
    },
    departments: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeAnchor: 0,
    };
  },
  computed: {
    getAnchorLinks() {
      const result = [];
      for (let index = 0; index < this.departments.length; index += 1) {
        const department = this.departments[index];
        result.push({
          title: department.title,
          el: `#${this.replaceSpaces(department.title)}`,
          isShown: true,
        });
      }
      return result;
    },
  },
  methods: {
    replaceSpaces(string) {
      if (string && string.replaceAll) {
        return string.replaceAll(' ', '');
      }
      return '';
    },
    viewHandler(index, event) {
      if (event.type === 'enter') {
        this.activeAnchor = index;
      }
    },
    getRandomPicture() {
      return require(`~/assets/img/card/${Math.floor(Math.random() * 6) + 1}.png`);
    },
    getProfessionCase(count) {
      if (count === 1 || count === 21) {
        return 'профессия';
      } if (count > 1 && count < 5) {
        return 'профессии';
      }
      return 'професий';
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  background-color: #fff;
}

.footer {
  padding-top: 36px;
  border-top: 2px solid rgba(0, 0, 0, .05);
}

.direction {
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
}

.direction-menu {
  width: 205px;
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
  color: rgba(255, 255, 255, .7);
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
  background: rgba(0, 0, 0, .12);
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
  letter-spacing: .04em;
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
  display: flex;
  justify-content: space-between;
}

.basic_container {
  max-width: 100%;
}

.department-description {
  margin-top: 7px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #79829A;
}

.departments-cards {
  max-width: 100%;
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 29px;
  grid-column-gap: 29px;
}

.department-count {
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  background: #E6E9EC;
  border-radius: 48px;

  p {
    padding: 0 12px;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1E2228;
  }
}

.department {
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

.department-title {
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
}

@media (max-width: 1024px) {
  .container_direction {
    flex-direction: column;
  }

  .direction {
    padding: 0 15px;
    box-sizing: border-box;
  }

  .direction-menu {
    margin-bottom: 16px;
  }

  .image {
    display: none;
  }

  .departments-cards {
    grid-template-columns: 1fr;
  }

  .main_direction {
    padding: 18px;
    margin: 26px 0;
    height: 100%;
  }

  .text_main-direction {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 58px;
    margin-top: 10px;
  }

  .title_direction {
    font-size: 36px;
    line-height: 52px;
    margin-top: 4px;
  }
}
</style>
