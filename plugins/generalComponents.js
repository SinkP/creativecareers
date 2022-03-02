/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
// Полифил
import ObjectEntriesPolyfill from '@/helpers/ObjectEntriesPolyfill';

const requireComponent = require.context(
  // Относительный путь до каталога компонентов
  '../components/general/',
  // Обрабатывать или нет подкаталоги
  false,
  // Регулярное выражение для определения файлов базовых компонентов
  /App[A-Z]\w+\.(vue|js)$/,
);

const requireComponent2 = require.context(
  '../components/newcomponents/general/',
  false,
  /App[A-Z]\w+\.(vue|js)$/,
);

const initComponent = (fileName, component) => {
  // Получение конфигурации компонента
  const componentConfig = component(fileName);

  // Получение имени компонента в PascalCase
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
    .match(/[A-Z][a-z]+/g)
    .join('-')
    .toLowerCase();

  Vue.component(
    componentName,
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    componentConfig.default || componentConfig,
  );
};

requireComponent.keys().forEach(fileName => initComponent(fileName, requireComponent));
requireComponent2.keys().forEach(fileName => initComponent(fileName, requireComponent2));


ObjectEntriesPolyfill();
