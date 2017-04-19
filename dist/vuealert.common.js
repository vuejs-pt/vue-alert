var _extends = Object.assign || function (target) {
var arguments$1 = arguments;
 for (var i = 1; i < arguments.length; i++) { var source = arguments$1[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var VueAlert = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": _vm.alertTransition } }, [_c('div', { staticClass: "alert", class: _vm.alertType }, [_c('p', [_vm._v(_vm._s(_vm.alertMessage))])])]);
  }, staticRenderFns: [],
  name: 'vue-alert',
  data: function data() {
    return {
      alertMessage: '',
      alertType: '',
      alertTransition: '',
      default: {
        message: '',
        type: 'info',
        transition: 'fade',
        delay: 5000
      }
    };
  },

  methods: {
    setDefault: function setDefault() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$message = _ref.message,
          message = _ref$message === undefined ? this.default.message : _ref$message,
          _ref$type = _ref.type,
          type = _ref$type === undefined ? this.default.type : _ref$type,
          _ref$delay = _ref.delay,
          delay = _ref$delay === undefined ? this.default.delay : _ref$delay,
          _ref$transition = _ref.transition,
          transition = _ref$transition === undefined ? this.default.transition : _ref$transition;

      this.default.message = message;
      this.default.type = type;
      this.default.delay = delay;
      this.default.transition = transition;
      return this;
    },
    show: function show() {
      var _this = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$message = _ref2.message,
          message = _ref2$message === undefined ? this.default.message : _ref2$message,
          _ref2$type = _ref2.type,
          type = _ref2$type === undefined ? this.default.type : _ref2$type,
          _ref2$delay = _ref2.delay,
          delay = _ref2$delay === undefined ? this.default.delay : _ref2$delay,
          _ref2$transition = _ref2.transition,
          transition = _ref2$transition === undefined ? this.default.transition : _ref2$transition;

      this.alertShow = true;
      this.alertMessage = message;
      this.alertType = 'alert-' + type;
      this.alertTransition = transition;
      if (this.alertTimeout) {
        clearTimeout(this.alertTimeout);
      }
      if (delay) {
        this.alertTimeout = setTimeout(function () {
          _this.show({
            delay: false
          });
        }, delay);
      }
    },
    hide: function hide() {
      this.alertShow = false;
    },
    danger: function danger(args) {
      this.show(_extends({ type: 'danger' }, args));
    },
    info: function info(args) {
      this.show(_extends({ type: 'info' }, args));
    },
    success: function success(args) {
      this.show(_extends({ type: 'success' }, args));
    },
    warning: function warning(args) {
      this.show(_extends({ type: 'warning' }, args));
    }
  }
};

function plugin(Vue, options) {
  if (plugin.installed) { return; }
  plugin.installed = true;
  Vue.component('vue-alert', VueAlert);
  Object.defineProperties(Vue.prototype, {
    $alert: {
      get: function get() {
        var el = this;
        while (el) {
          for (var i = 0; i < el.$children.length; i++) {
            var child = el.$children[i];
            if (child.$options._componentTag === 'vue-alert') {
              return child;
            }
          }
          el = el.$parent;
        }
        if (process.env.NODE_ENV !== 'production') {
          console.warn('Vue-alert component must be part of this component scope or any of the parents scope.');
        }
        return null;
      }
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

module.exports = plugin;
