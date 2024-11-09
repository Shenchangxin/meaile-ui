import TagApi from "@/api/TagApi.ts";
import {defineStore} from "pinia";


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
    tagList: Tag[]
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
        tagList: []

    }),
    getters:{
        getTagList(state){
            return state.tagList
        }
    },
    actions: {
        //users
        async getTagList(id:number) {
            const result = await TagApi.getTagList(id)
            this.tagList = result.data
            console.log(result.data)
        }
    }

})
