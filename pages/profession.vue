<template lang="html">
  <div class="profession">
    <div class="profession-main">
      <DNavigation :links="links" />
      <DTitle class="profession-title">
        Геймдизайнер
      </DTitle>
      <p class="profession-subtitle">
        Геймдизайнер - архитектор игровых процессов, он отвечает за создание правил, по которым работают игровые вселенные.
      </p>
      <div class="date-container">
        <img src="~/assets/img/profession/pencil.svg" alt="карандаш">
        <span class="date">
          Последнее обновление: 23.08.21
        </span>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content">
        <DSpecification :cols="specification" />
        <div class="container">
          <h2 class="subtitle">
            Описание
          </h2>
          <p class="text _main _short">
            Геймдизайнер - архитектор игровых процессов, он отвечает за создание правил, по которым работают игровые вселенные. Благодаря ему художественный и технологичный продукт становится игрой, в общем понимании этого слова.
            <br><br>
            Существует распространенная ошибка в понимании профессии геймдизайнера. Нельзя воспринимать геймдизайнера как художника, в этом слове под “дизайном” понимают проектирование механики, расчет игровой экономики и всего, что связано с конструированием игровых процессов. Поэтому тебе необходимо понять, что геймдизайнер – это инженер, в основе деятельности которого лежит, прежде всего, математика и логика
            <br><br>
            Обязанности геймдизайнера могут различаться в зависимости от размеров и бюджета компаний. В крупных студиях геймдизайном могут заниматься системные дизайнеры, дизайнеры уровней, дизайнеры игрового процесса, контент-дизайнеры. В более общем понимании, первостепенные задачи геймдизайнера – создание и расчет систем баланса, внутриигровой экономики, статистики, проектирование механики и создание прототипов игры.
          </p>
        </div>
        <div class="container">
          <h2 class="subtitle">
            Чем занимается геймдизайнер?
          </h2>
          <img class="image _big" src="~/assets/img/profession/gamepad.png">
          <p class="text _short">
            Глобальной задачей геймдизайнера является создание интересного и завлекающего игрового процесса. Он придумывает правила, по которым работает игра. Вместе с командой он определяет цель игры, с дизайнером геймплея создает условия достижения этой цели и препятствия, возникающие на пути к ней. С нарративным дизайнером и сценаристом продумывает интересные сюжетные повороты и отражает их в геймплее.
            <br><br>
            Для того, чтобы понять специфику работы геймдизайнера, нужно разобраться с его задачами. Во-первых, это расчет баланса - числового отношения игровых характеристик, например урона к здоровью, скорости постройки зданий и прочего. Баланс игры может зависеть от множества факторов: способа приобретения игры пользователем, платформы, жанра и сюжета игры. С помощью таблиц геймдизайнер создает базу данных об этих числовых отношениях.
            <br><br>
            Геймдизайнер разрабатывает внутриигровую экономику – свод правил и законов, по которым, под влиянием действий игрока, изменяются числовые показатели игры. Экономику игры еще называют “метабалансом”, это не только валюта или ресурсы в стратегиях, но и любые другие измеряемые игровые единицы, например значения силы разных персонажей.
            <br><br>
            Геймдизайнер в онлайн-проектах работает с инструментом “Live-Ops” — это такие внутриигровые события, которые не требуют скачивания дополнений. Используется этот инструмент чаще всего в мобильных или многопользовательских онлайн играх для поддержания интереса игрока. Примером “Live-Ops” можно назвать игровые события или конкурсы, приуроченные к реальным или сюжетным праздникам. Задача геймдизайнера тут вместе с нарративным дизайнером заключается в создании дополнительных механик, подарков или других улучшений для игроков.
            <br><br>
            Геймдизайнер в команде должен давать четкую структурированную информацию коллегам из разных департаментов: программистам, художникам, тестировщикам. Механика игры может влиять на характер и настроение игры наравне с художественной составляющей, поэтому геймдизайнеру важно точно описывать игровые процессы и объекты. С помощью прототипирования, геймдизайнер сообщает информацию программистам. Прототип – это примитивная версия планируемой игры, которая включает в себя основу механики, элементы будущего геймплея и ключевых сюжетных поворотов. Прототипы используются геймдизайнером и на ранних стадиях тестирования, особенно если проект создается по принципу TDD (test-driven development) – разработка через тестирование.
          </p>
        </div>
        <div class="container ads_big"></div>
        <div class="container">
          <h2 class="subtitle">
            Что должен знать и уметь геймдизайнер
          </h2>
          <img class="image _big" src="~/assets/img/profession/dude.png">
          <p class="text _short">
            Геймдизайнер должен понимать структуру проекта, мыслить логически, точно высчитывать игровые параметры. Помимо инженерного, стратегического мышления, он должен обладать и пониманием психологии игрока, чтобы все его решения, в первую очередь, делали игру интересной и привлекающей внимание. Сид Мейер – разработчик культовой серии игр “Цивилизация” говорил, что игрок и его интересы должны быть у геймдизайнера на первом месте.
          </p>
          <div class="skills">
            <h2 class="subtitle _small">
              Умения и навыки
            </h2>
            <DText
              v-for="skillItem of skills"
              :key="skillItem.text"

              :icon="skillItem.icon"
              :name="skillItem.name"
              :text="skillItem.text"
              class="skills-content"
            />
          </div>
          <div class="tools">
            <h2 class="subtitle _small">
              Знания и инстументы
            </h2>
            <DText
              v-for="toolItem of tools"
              :key="toolItem.text"

              :icon="toolItem.icon"
              :name="toolItem.name"
              :text="toolItem.text"
              class="skills-content"
            />
            <DList
              :list="programs"
            />
          </div>
        </div>
        <div class="container">
          <h2 class="subtitle _offset">
            С кем работает геймдизайнер?
          </h2>
          <div>
            <DWorker
              v-for="workerItem of workers"
              :key="workerItem.name"

              :icon="workerItem.icon"
              :title="workerItem.name"
              class="worker_block"
            />
          </div>
        </div>
        <div class="container _advice">
          <h2 class="subtitle">
            Советы по поиску работы
          </h2>
          <DText
            v-for="adviceItem of advices"
            :key="adviceItem.text"

            :icon="adviceItem.icon"
            :name="adviceItem.name"
            :text="adviceItem.text"
            class="content_advice"
          />
        </div>
        <div class="container">
          <h2 class="subtitle _offset">
            Известные представители профессии
          </h2>
          <DWorker
            v-for="dudeItem of dudes"
            :key="dudeItem.name"
            :icon="dudeItem.icon"
            :title="dudeItem.name"
            class="worker_block"
          />
        </div>
        <div class="interesting">
          <h2 class="subtitle">
            Также может быть интересно
          </h2>
          <div class="cards">
            <DCard
              v-for="cardItem of cards"
              :key="cardItem.name"

              :name="cardItem.name"
              :salary="cardItem.salary"
              :icon="cardItem.icon"
            />
          </div>
        </div>
        <div class="read">
          <h2 class="subtitle">
            Смотреть и читать
          </h2>
          <div class="links">
            <a href="#" class="link_read">
              <p class="link_text">
                Learn to Code or Game Design? Which is better? (and why?)
              </p>
              <img class="arrow" src="~/assets/img/profession/arrow.svg">
            </a>
            <a href="#" class="link_read">
              <p class="link_text">
                Game a Week: Teaching Students to Prototype
              </p>
              <img class="arrow" src="~/assets/img/profession/arrow.svg">
            </a>
            <a href="#" class="link_read">
              <p class="link_text">
                Prototyping Games in Unity?
              </p>
              <img class="arrow" src="~/assets/img/profession/arrow.svg">
            </a>
          </div>
        </div>
      </div>
      <div class="container_menu">
        <div class="sticky">
          <DMenu class="menu"
            :active="0"
            :list="menuLinks"
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
  data() {
    return {
      skills: [
        {
          icon: require('../assets/img/profession/check.svg'),
          name: 'Математическое и стратегическое мышление',
          text: 'Умение рассчитывать вероятность, видеть количественные зависимости, комбинировать числовые значения – все это пригодится тебе для создания непротиворечивых и логически верных правил игры',
        },
        {
          icon: require('../assets/img/profession/check.svg'),
          name: 'Проектирование и планирование',
          text: 'Тебе важно научиться создавать “архитектуру” игрового проекта, делить большие задачи на подзадачи, а также составлять различные схемы;',
        },
        {
          icon: require('../assets/img/profession/check.svg'),
          name: 'Любовь к играм',
          text: 'Тебе важно по-настоящему любить игры, постоянно узнавать новое не только в области компьютерных новинок, но искать вдохновение в настольных и даже спортивных играх. Эрудиция и большой багаж игрового опыта помогут тебе в создании новых игр;',
        },
      ],
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
          title: 'Gamedev',
          to: '/',
        },
        {
          title: 'Геймдизайнер',
          to: '/',
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
      specification: [
        {
          title: 'Уровень сложности',
          description: 'Для специалистов',
          marked: true,
        },
        {
          title: 'Также известен как',
          description: 'Game Design, Game Developer',
        },
      ],
      programs: [
        'Workfloy',
        'Workfloy',
        'Workfloy',
      ],
      tools: [
        {
          icon: require ('../assets/img/profession/toolsIcon.svg'),
          name: 'Программы планирования и ведения проектов',
          text: 'Для создания текстовой документации, блок-схем, чек-листов и таблиц, которыми ты можешь быстро поделиться с коллегами, тебе понадобится знание таких платформ как:',
        }
      ],
      workers: [
        {
          icon: require ('../assets/img/profession/humanIcon.svg'),
          name: 'Дизайнер игрового процесса',
        },
        {
          icon: require ('../assets/img/profession/humanIcon.svg'),
          name: 'Сценарист',
        },
        {
          icon: require ('../assets/img/profession/humanIcon.svg'),
          name: 'Дизайнер уровней',
        }
      ],
      advices: [
        {
          icon: require ('../assets/img/profession/mark.svg'),
          name: 'Собери портфолио',
          text: 'В портфолио можно продемонстрировать прототипы механики, видео отрывки, разработанных тобой модов к играм или короткие мини-игры. Определись с платформой, для которой ты хочешь разрабатывать игры, а также с жанром, в котором тебе приятнее всего работать. Учитывай эти факторы при выборе компании – создавай подходящие демонстрационные материалы. Продемонстрируй в портфолио и навыки письменной коммуникации – создай описание своих проектов, таблицы и дополнительные пояснения для разных департаментов.',
        },
        {
          icon: require ('../assets/img/profession/mark.svg'),
          name: 'Получи опыт в тестировании игр',
          text: 'Многие геймдизайнеры начинали свой путь с тестирования видеоигр. Такой опыт позволит тебе выработать представление о возможных сложностях и дефектах, возникающих при создании игр, а также даст возможность исследовать самые разнообразные игровые продукты.',
        },
      ],
      dudes: [
        {
          icon: require ('../assets/img/profession/markus.svg'),
          name: 'Маркус Перссон',
        },
        {
          icon: require ('../assets/img/profession/ueel.svg'),
          name: 'Уилл Райт',
        },
      ],
      cards: [
        {
          name: 'Геймдизайнер',
          salary: 'Зарплата: 250 тыс. ₽',
          icon: require ('~/assets/img/card/1.png'),
        },
        {
          name: 'Продюссер',
          salary: 'Зарплата: 250 тыс. ₽',
          icon: require ('~/assets/img/card/2.png'),
        },
        {
          name: 'Ассистент продюссера',
          salary: 'Зарплата: 250 тыс. ₽',
          icon: require ('~/assets/img/card/3.png'),
        },
      ],
    }
  },
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
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  overflow: hidden;
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
  align-items: center;
  margin-bottom: 18px;
}
.link_read:last-child {
  margin-bottom: 0;
}
.link_text {
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 35px;
  color: #4F5A6A;
}
.link_text:hover {
  text-decoration: underline;
}
.arrow {
  width: 32px;
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
    .container {
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
</style>
