import type { Module } from 'vuex'
import  type  {State}  from '@/store'
export  interface GroupState{

    id:number,
    tagName:string,
    parentId: number,
    userId: number,
    status:string,
    createdBy: string,
    createdTime: string,
    updatedBy: string
    updatedTime: string,
}
export const store: Module<GroupState, State> = {
    namespaced: true,
    state: (): GroupState => ({
        id:1,
        tagName:"",
        parentId: 1,
        userId: 1,
        status:"",
        createdBy: "",
        createdTime: "",
        updatedBy: "",
        updatedTime: "",
    }),
    mutations: {
        changeLang(state: GroupState, lang: string) {
            state.tagName = lang
        },
    },
}