import Icon from './src/index.vue';
import './src/iconfont.js';

Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
}

export default Icon;
