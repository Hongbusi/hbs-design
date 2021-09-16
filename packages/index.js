import BackTotop from './BackToTop/src';

const components = [
  BackTotop
];

const install = function(Vue, options) {
  components.map(component => {
    Vue.use(component);
  });
};

export default {
  version: '1.0.0',
  install,
  BackTotop
}
