import Theme from 'vitepress/theme';
import NotionSite from '../components/NOtionSite.vue';

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('NotionSite', NotionSite);
  },
};
