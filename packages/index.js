import BackTotop from './BackToTop';
import Modal from './Modal';
import Icon from './Icon';

const components = [
  BackTotop,
  Modal,
  Icon
];

const install = function(Vue, options) {
  components.map(component => {
    Vue.use(component);
  });
};

export default {
  version: '1.0.0',
  install,
  BackTotop,
  Modal,
  Icon
}
