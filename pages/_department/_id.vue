<template lang="html">
  <div class="profession">
    <div class="profession-main">
      <DNavigation :links="links" />
      <DTitle class="profession-title">
        {{ getData.title }}
      </DTitle>
      <p class="profession-subtitle">
        Как стать, что делать, что читать, с кем сравнивать, все ответы в одном месте
      </p>
      <div class="date-container">
        <img src="~/assets/img/profession/pencil.svg" alt="карандаш">
        <span class="date">
          Последнее обновление: 19.12.21
        </span>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <DSpecification v-if="getData.description" :cols="specification" />
        <div class="d-container" id="description">
          <h2 class="subtitle">
            Описание
          </h2>
          <p class="text _main _short">
            {{ getData.description }}
          </p>
        </div>
        <div v-if="getData.primary_occupation_info" class="d-container" id="primary_occupation_info">
          <h2 class="subtitle">
            Чем занимается {{ getData.title.toLowerCase() }}?
          </h2>
          <img class="image _big" src="~/assets/img/profession/gamepad.png">
          <p class="text _short">
            {{ getData.primary_occupation_info }}
          </p>
        </div>
        <div v-if="getData.education" class="d-container" id="education">
          <h2 class="subtitle">
            Образование
          </h2>
          <img class="image _big" src="~/assets/img/profession/gamepad.png">
          <p class="text _short">
            {{ getData.education }}
          </p>
        </div>
        <div class="d-container ads_big"></div>
        <div class="d-container">
          <h2 class="subtitle" id="things_you_must_know">
            Что должен знать и уметь {{ getData.title.toLowerCase() }}
          </h2>
          <img class="image _big" src="~/assets/img/profession/dude.png">
          <p class="text _short">
            {{ getData.things_you_must_know }}
          </p>
          <div v-if="getData.skills.length" class="skills" id="skills">
            <h2 class="subtitle _small">
              Умения и навыки
            </h2>
            <DText
              v-for="skill of getData.skills"
              :key="skill.title"

              :icon="require('~/assets/img/profession/check.svg')"
              :title="skill.title"
              :description="skill.description"
              class="skills-content"
            />
          </div>
          <div v-if="getData.knowledges.length" id="knowleages" class="tools">
            <h2 class="subtitle _small">
              Знания и инстументы
            </h2>
            <DText
              v-for="knowledge of getData.knowledges"
              :key="knowledge.title"

              :icon="require ('~/assets/img/profession/toolsIcon.svg')"
              :title="knowledge.title"
              :description="knowledge.description"
              class="skills-content"
            />
          </div>
        </div>
        <div v-if="getData.how_to_become" id="begin" class="d-container">
          <h2 class="subtitle">
            С чего начать?
          </h2>
          <img class="image _big" src="~/assets/img/profession/gamepad.png">
          <p class="text _short">
            {{ getData.how_to_become }}
          </p>
        </div>
        <div v-if="getCardsByIds(getData.works_with).length" id="workwith" class="d-container">
          <h2 class="subtitle _offset">
            С кем работает {{ getData.title.toLowerCase() }}?
          </h2>
          <div>
            <DWorker
              v-for="worker of getCardsByIds(getData.works_with)"
              :key="worker.title"

              :icon="require ('~/assets/img/profession/humanIcon.svg')"
              :title="worker.title"
              :to="`/industries/${worker.to}`"
              class="worker_block"
            />
          </div>
        </div>
        <div v-if="getData.job_search_advices.length" id="advices" class="d-container _advice">
          <h2 class="subtitle">
            Советы по поиску работы
          </h2>
          <DText
            v-for="adviceItem of getData.job_search_advices"
            :key="adviceItem.title"

            :icon="require ('~/assets/img/profession/mark.svg')"
            :title="adviceItem.title"
            :description="adviceItem.description"
            class="content_advice"
          />
        </div>
        <div v-if="getData.famous_personalities.length" id="famous" class="d-container">
          <h2 class="subtitle _offset">
            Известные представители профессии
          </h2>
          <DWorker
            v-for="personal of getData.famous_personalities"
            :key="personal.name"
            :icon="personal.portrait_link || require('~/assets/img/profession/humanIcon.svg')"
            :title="personal.name"
            :href="personal.bio_link"
            class="worker_block"
          />
        </div>
        <div v-if="getCardsByIds(getData.might_be_interesting).length" id="intresting" class="interesting">
          <h2 class="subtitle">
            Также может быть интересно
          </h2>
          <div class="cards">
            <DCard
              v-for="cardItem of getCardsByIds(getData.might_be_interesting)"
              :key="cardItem.name"

              :title="cardItem.title"
              :to="`industries/${cardItem.id}`"
              :salary="`Зарплата: ${priceFormatter(cardItem.salary)}`"
              :image="cardItem.image ? cardItem.image : getRandomPicture"
            />
          </div>
        </div>
        <div v-if="getData.relevant_links.length" id="read" class="d-container read">
          <h2 class="subtitle">
            Смотреть и читать
          </h2>
          <div class="links">
            <a v-for="link of getData.relevant_links" :key="link.title" :href="link.link" class="link_read">
              <p class="link_text">
                {{ link.title }}
              </p>
              <img class="arrow" src="~/assets/img/profession/arrow.svg">
            </a>
          </div>
        </div>
      </div>
      <div class="container_menu">
        <div class="sticky">
          <DMenu class="menu"
            :active="active"
            :list="menuList"
            @chose="active = $event"
          />
          <div class="ads_small"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DTitle from '~/components/global/Title.vue'
import DMenu from '~/components/global/Menu.vue'
import DText from '~/components/global/SampleText.vue'
import DWorker from '~/components/global/SampleWorker.vue'
import DCard from '~/components/global/Card.vue'
import DNavigation from '~/components/global/Navigation.vue'
import DSpecification from '~/components/profession/Specification.vue'
import DList from '~/components/profession/List.vue'
import priceFormatter from '@/helpers/priceFormatter';

export default {
  components: {
    DTitle,
    DMenu,
    DText,
    DWorker,
    DCard,
    DNavigation,
    DSpecification,
    DList,
  },
  middleware: 'card',
  data() {
    return {
      active: 0,
    }
  },
  computed: {
    getData() {
      return this.$store.state.card;
    },
    links() {
      return [
        {
          title: 'Главная',
          to: '/',
        },
        {
          title: 'Индустрии',
          to: '/industries',
        },
        {
          title: this.getData.title,
          to: `/industries/${this.getData.id}`,
        },
      ];
    },
    menuList() {
      return [
        {
          title: 'Описание',
          el: '#description',
          isShown: this.getData.description,
        },
        {
          title: 'Чем занимается',
          el: '#primary_occupation_info',
          isShown: this.getData.primary_occupation_info,
        },
        {
          title: 'Образование',
          el: '#education',
          isShown: this.getData.education,
        },
        {
          title: 'Что должен знать и уметь',
          el: '#things_you_must_know',
          isShown: this.getData.things_you_must_know,
        },
        {
          title: 'Умения и навыки',
          el: '#skills',
          isShown: this.getData.skills.length,
        },
        {
          title: 'Знания и инстументы',
          el: '#knowleages',
          isShown: this.getData.knowledges.length,
        },
        {
          title: 'С чего начать',
          el: '#begin',
          isShown: this.getData.how_to_become,
        },
        {
          title: 'С кем работает',
          el: '#workwith',
          isShown: this.getCardsByIds(this.getData.works_with).length,
        },
        {
          title: 'Советы по поиску работы',
          el: '#advices',
          isShown: this.getData.job_search_advices.length,
        },
        {
          title: 'Известные представители профессии',
          el: '#famous',
          isShown: this.getData.famous_personalities.length,
        },
        {
          title: 'Также может быть интересно',
          el: '#intresting',
          isShown: this.getCardsByIds(this.getData.might_be_interesting).length,
        },
        {
          title: 'Смотреть и читать',
          el: '#read',
          isShown: this.getData.relevant_links.length,
        },
      ];
    },
    specification() {
      return [
        {
          title: 'Уровень сложности',
          description: this.getData.job_complexity === 'newbie' ? 'Для новичков' : 'Для специалистов',
          marked: this.getData.job_complexity !== 'newbie',
        },
        {
          title: 'Также известен как',
          description: this.getData.aliases.join(', '),
        },
      ];
    },
    getRandomPicture() {
      return require (`~/assets/img/card/${Math.floor(Math.random() * 6) + 1}.png`)
    },
    getWorkWith() {
      const workWith = this.getData.works_with;
      const result = [];
      for (let index = 0; index < this.$store.state.cards.length; index++) {
        const card = this.$store.state.cards[index];
        if (workWith.includes(card.id)) {
          result.push({
            title: card.title,
            to: card.id
          });
        }
      }
      return result;
    },
  },
  methods: {
    priceFormatter,
    getCardsByIds(array) {
      if (!array || !array.length) {
        return [];
      }
      const result = [];
      for (let index = 0; index < this.$store.state.cards.length; index++) {
        const card = this.$store.state.cards[index];
        if (array.includes(card.id)) {
          result.push({
            title: card.title,
            to: card.id,
            id: card.id,
            salary: card.salary_max,
          });
        }
      }
      return result;
    },
  },
  head() {
    return {
      title: `Как стать ${this.getData.title} и что для этого нужно`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: `${this.getData.description}`,
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
.profession {
  width: 100%;
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding-top: 394px;
  padding-bottom: 142px;
}
.profession-main {
  width: 100%;
  max-width: 1200px;
  height: 387px;
  position: absolute;
  top: 48px;
  padding-left: 103px;
  padding-right: 103px;
  padding-top: 48px;
  background: #3E39D3;
  background-image: url('~/assets/img/profession/bg.png');
  background-position: right;
  background-repeat: no-repeat;
  border-radius: 12px;
  z-index: 0;
}
.profession-title {
  margin-top: 36px;
  max-width: 95%;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 2px;
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
.profession-subtitle {
  width: 100%;
  max-width: 584px;
  height: 50px;
  margin-top: 24px;
  font-family: Rubik, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0;
  text-align: left;
  color: rgba(255, 255, 255, 0.7);
  text-overflow: ellipsis;
}
.date-container {
  margin-top: 36px;
  display: flex;
}
.date {
  margin-left: 5px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #C5C4F2;
}
.content-wrapper {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
}
.marked-icon {
  margin-left: 3.67px;
}
.knowledge {
  width: 100%;
  max-width: 892px;
  margin-top: 24px;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
}
.image._big {
  max-width: 844px;
  width: 100%;
  height: 250px;
  margin-top: 24px;
  margin-bottom: 24px;
  object-fit: cover;
}
.skills {
  width: 100%;
  max-width: 892px;
  margin-top: 32px;
  padding: 32px;
  margin-left: -24px;
  background:#F1FCF7;
}
.skills-content {
  margin-top: 24px;
  max-width: 540px;
  width: 100%;
}
.skills-content:last-child {
  margin-bottom: 0;
}
.tools {
  margin-top: 32px;
  padding-left: 8px
}
.worker_block {
  margin-top: 24px;
}
.content_advice {
  margin-top: 24px;
  width: 100%;
  max-width: 705px;
}
.interesting {
  width: 100%;
  max-width: 892px;
  margin-top: 48px;
}
.cards {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container._advice {
  padding: 24px 32px;
}
.read {
  margin-top: 48px;
}
.links {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
}
.link_read {
  display: flex;
  margin-bottom: 18px;
}
.link_read:last-child {
  margin-bottom: 0;
}
.link_read:hover {
  color: #4F5A6A;
  text-decoration: underline;
}
.link_text {
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  color: #4F5A6A;
}
.arrow {
  width: 32px;
  height: max-content;
}
.circle {
  width: 5px;
  height: 5px;
  margin-right: 12px;
  background: #000;
  border-radius: 50%;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  width: max-content;
  height: min-content;
  top: 24px;
  z-index: 2;
}
.menu {
  top: 48px;
  z-index: 2;
}
.ads_small {
  top: 478px;
  width: 284px;
  height: 284px;
  margin-top: 24px;
  background: #ECECEC;
}
.ads_big {
  height: 200px;
  margin-top: 24px;
  background: #ECECEC;
}

@media (max-width: 1200px) {
  .container_menu {
    display: none;
  }
  .read {
    padding-left: 24px;
  }
  .interesting {
    padding-left: 24px
  }
  .content-wrapper {
    max-width: 100%;
    .d-container {
      max-width: 100%;
    }
  }
  .cards {
    flex-direction: column;
    margin-right: 24px;
    .card {
      width: 100%;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 1024px) {
  .profession {
    overflow: hidden;
  }
}
</style>
