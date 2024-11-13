import TagApi from "@/api/TagApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage";


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
export  interface TagState{
    tag :Tag,
    tagList: Tag[],
    firstTagList: Tag[]
}

export const tagStore = defineStore('tagStore',{
    state: (): TagState => ({
        tag:{
            id:1,
            tagName:"",
            parentId: 1,
            userId: 1,
            status:"",
            createdBy: "",
            createdTime: "",
            updatedBy: "",
            updatedTime: "",
        },
        tagList: [],
        firstTagList: []
    }),
    getters:{
        getTagList(state){
            return state.tagList
        },
        getFirstTagList(state){
            return state.firstTagList
        },
        getSecondTagList(state): Tag[]{
            return goodStorage.get('secondTagList') || state.tagList
        }
    },
    actions: {
        storeTags(secondTagList : Tag[]){
            goodStorage.set('secondTagList',secondTagList)
            this.tagList = secondTagList
        },

        async getTagList(id:number) {
            const result = await TagApi.getTagList(id)
            this.tagList = result.data
            console.log(result.data)
        },

        async getFirstTagList() {
            const result = await TagApi.getTagList(0)
            this.firstTagList = result.data
            console.log(result.data)
        },

    }

})
