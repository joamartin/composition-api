const Vue = require('vue/dist/vue.common.js');
import { plugin, createComponent, createElement as h, ref } from '../src';

Vue.use(plugin);

it('should work', () => {
  const Child = createComponent({
    props: { msg: String },
    setup() {
      return props => h('span', props.msg);
    },
  });

  const App = createComponent({
    setup() {
      const msg = ref('hello');
      return () =>
        h('div', [
          h(Child, {
            props: {
              msg: msg.value,
            },
          }),
        ]);
    },
  });
  const vm = new Vue(App).$mount();
  expect(vm.$el.querySelector('span').textContent).toBe('hello');
});
