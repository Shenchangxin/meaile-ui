import {ref, Ref, watchEffect} from "vue";
import {Tag, tagStore,} from "@/store/modules/tag.ts";
import {storeToRefs} from "pinia";
import router from "@/router";


export  default  class SearchService{
    static store = tagStore()
    static storeRefs = storeToRefs(SearchService.store)

    static firstTagActiveIndex:Ref<number>=ref(0)

    static tagList: Ref<Tag[]> = ref([])

    static secondTagList: Ref<Tag[]> = ref([])

    static async getFirstTag(){
        await this.store.getFirstTagListById()
        this.storeFirstTag(1)
    }

    static storeFirstTag(index:number){
        const firstTag = this.store.firstTagList.find((firstTag)=>{
            return firstTag.id === index
        })!
        this.store.storeClickTagsByKey(firstTag,'firstTag')
    }

    //查询标签数据
    static async getFirstTagList(){
        await SearchService.store.getTagListById(1)
    }
    static changeTab(index: number){
        SearchService.firstTagActiveIndex.value=index
        SearchService.storeFirstTag(index+1)
    }
    static showColLine(index: number){
        return (index+1) % 3 !== 0
    }

    static getSecondTagList(){
        watchEffect(async () => {
            await SearchService.store.getTagListById(SearchService.firstTagActiveIndex.value+1)
        })
    }

    static  getClickTag(){
        return  SearchService.store.getSecondTag
    }

    static back(){
        router.back()
    }

    static toFoodBookInfo (secondTag: Tag,firstTag: Tag){
        SearchService.store.storeClickTagsByKey(secondTag,'secondTag')
        SearchService.store.storeClickTagsByKey(firstTag,'firstTag')
        router.push({name:'foodbook'})
    }

}