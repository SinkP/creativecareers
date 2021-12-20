<template>
  <div>
    <DList
      :departments="departments"
      v-bind="data"
      :navigation="navigation"
    />
  </div>
</template>
<script>
import DList from '~/components/pages/List.vue';
export default {
  components: {
    DList,
  },
  middleware: 'industries',
  data() {
    return {
      navigation: [
        {
          title: 'Главная',
          to: '/',
        },
        {
          title: 'Индустрии',
          to: '/industries',
        }
      ],
    };
  },
  computed: {
    departments() {
      const result = [];
      for (let index = 0; index < this.$store.state.departments.length; index++) {
        const department = Object.assign({}, this.$store.state.departments[index]);
        department.cards = this.getCardsOfDepartments(department.career_cards);
        result.push(department);
      }
      return result;
    },
    data() {
      return this.$store.state.industries;
    },
  },
  methods: {
    getCardsOfDepartments(arrayOfId) {
      const cards = this.$store.state.cards;
      const result = [];
      for (let index = 0; index < cards.length; index++) {
        if (arrayOfId.includes(cards[index].id)) {
          result.push(cards[index]);
        }
      }
      return result;
    },
  },
  head() {
    return {
      title: `Список направлений`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Какую профессию выбрать для разработки игр',
        }
      ],
    }
  }
};
</script>
