import { useStore as baseUseStore,createStore } from 'vuex';
import type { InjectionKey } from "vue";
import type { Store } from 'vuex';
import {store as user} from "./modules/user";
// 引入模块下的文件类型
import { UserState } from "./modules/user";
// 限制类型
export interface State {
    count: number;

}
//继承主模块下的接口 (变化部分)
interface StateAll extends State{
    users : UserState, //UsersState是上面引入的类型 users是自己定义的名
    //若是多个模块  依次类推
}

//这个就不可使用了 要换成下面的继承之后的接口
// export const key: InjectionKey<Store<State>> = Symbol();
export const key: InjectionKey<Store<StateAll>> = Symbol();

export default createStore<State>({
    //加类型注解 里面的参数才会生效
    state: { count: 211 },
    getters: {
        getUserInfo(state){
            return state.users
        }
    },
    mutations: {
        add(state,payload:number){
            console.log(state.count,payload)
        }
    },
    actions: {},
    modules: {
        user
    },
});
// 定义自己的 `useStore` 组合式函数 这里也有了变化
export function useStore () {
    return baseUseStore(key)//把key导出去了
}