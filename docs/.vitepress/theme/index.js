import Theme from 'vitepress/theme';
import Site from '../components/Site.vue';

export default {
  ...Theme,

  enhanceApp({ app }) {
    app.component('Site', Site);
  },
};
