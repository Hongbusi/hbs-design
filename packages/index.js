import Backtop from './back-top';

const components = [
  Backtop
];

const install = function(Vue, options) {
  components.map(component => {
    Vue.use(component);
  });
};

export default {
  version: '1.0.0',
  install,
  Backtop
}
