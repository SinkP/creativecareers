// eslint-disable-next-line import/no-extraneous-dependencies
import Vue from 'vue';
import VueMq from 'vue-mq';

/**
 * Устанавливаем $mq, штука которая позволяет внутри js кода делать различные манипуляции в зависимости от размера экрана пользователя
 * @param $device - особая переменная из пакета @nuxtjs/device
 * @param inject
 */

export default ({ $device }, inject) => {
  const { isTablet, isDesktop } = $device;
  let defaultBreakpoint = 'sm';
  if (isTablet) defaultBreakpoint = 'sm';
  else if (isDesktop) defaultBreakpoint = 'lg';

  if (process.server) { // Во время серверного рендеринга необходимо вручную задавать правильный $mq
    inject('mq', defaultBreakpoint);
  } else {
    Vue.use(VueMq, {
      breakpoints: {
        sm: 1024,
        md: 1200,
        lg: Infinity,
      },
      defaultBreakpoint,
    });
  }
};
