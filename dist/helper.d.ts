import Vue, { VNode, ComponentOptions, VueConstructor } from 'vue';
import { ComponentInstance } from './component';
export declare function ensureCurrentVMInFn(hook: string): ComponentInstance;
export declare function createComponentInstance<V extends Vue = Vue>(
  Ctor: VueConstructor<V>,
  options?: ComponentOptions<V>
): import('vue/types/vue').CombinedVueInstance<V, object, object, object, Record<never, any>>;
export declare function isComponentInstance(obj: any): boolean | null;
export declare function createSlotProxy(
  vm: ComponentInstance,
  slotName: string
): (...args: any) => void | VNode[];
export declare function resolveSlots(
  slots: {
    [key: string]: Function;
  } | void,
  normalSlots: {
    [key: string]: VNode[] | undefined;
  }
): {
  [key: string]: true;
};
