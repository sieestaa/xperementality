import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.ui.locale,
    messages: {
      en: require('~/locales/en.json'),
      ru: require('~/locales/ru.json')
    }
  });
};
