import type { Module } from 'vuex'
import  type  {State}  from '@/store'
import TagApi from "@/api/TagApi.ts";
export  interface TagState{
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
export  interface Tag{
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
export const store: Module<TagState, State> = {
    namespaced: true,
    state: (): TagState => ({
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
        setGroupList(state,tagList:TagState){
            state.tagList = tagList
        }
    },
    actions: {
        //users
        async getTagList({commit}) {
            const result = await TagApi.getTagList()
            commit('setTagList',result.data)
            console.log(result.data)
        }
    },
}