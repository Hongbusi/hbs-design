import Modal from './src/index.vue';

Modal.install = function(Vue) {
  Vue.component(Modal.name, Modal);
}

export default Modal;
