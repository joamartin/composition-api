import Vue, { VueConstructor } from 'vue';
import { Data, SetupFunction, SetupContext } from './component';
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    setup?: SetupFunction<Data, Data>;
  }
}
declare const plugin: {
  install: (Vue: VueConstructor<Vue>) => void;
};
export default plugin;
export { default as createElement } from './createElement';
export { SetupContext };
export { createComponent, ComponentRenderProxy, PropType, PropOptions } from './component';
export * from './apis/state';
export * from './apis/lifecycle';
export * from './apis/watch';
export * from './apis/computed';
export * from './apis/inject';
