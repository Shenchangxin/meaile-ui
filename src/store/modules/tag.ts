import TagApi from "@/api/TagApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage";

function hasProps(obj:Record<string, any>){
    return Boolean(Object.getOwnPropertyNames(obj).length)
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

export const tagStore = defineStore('tagStore',{
    state: ()=> {
        return {
            tag: {} as Tag,
            firstTag: {} as Tag,
            secondTag: {} as Tag,
            tagList: [] as Tag[],
            firstTagList: [] as Tag[]
        }
    },
    getters:{
        getTagList(state){
            return state.tagList
        },
        getFirstTagList(state){
            return state.firstTagList
        },
        // getSecondTagList(state): Tag[]{
        //     return goodStorage.get('secondTagList') || state.tagList
        // },
        getFirstTag(state): Tag{
            return hasProps(state.firstTag)? state.firstTag : goodStorage.get('firstTag')
        },
        getSecondTag(state): Tag{
            return hasProps(state.secondTag)? state.secondTag : goodStorage.get('secondTag')
        }
    },
    actions: {
        storeClickTagsByKey(clickTag : Tag,key: string){
            if (key === 'firstTag'){
                goodStorage.set('firstTag',clickTag)
                this.firstTag = clickTag
            }else if (key === 'secondTag'){
                goodStorage.set('secondTag',clickTag)
                this.secondTag = clickTag
            }

        },
        async getTagListByParentId(id:number) {
            const result = await TagApi.getTagListByParentId(id)
            this.tagList = result.data
            console.log("tagList:"+this.tagList)
        },

        async getFirstTagListByParentId() {
            const result = await TagApi.getTagListByParentId(0)
            this.firstTagList = result.data
            console.log("firstTagList:"+this.firstTagList)
        },

    }

})
