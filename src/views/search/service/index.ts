import {ref, Ref, watchEffect} from "vue";
import {Tag, tagStore,} from "@/store/modules/tag.ts";
import {storeToRefs} from "pinia";


export  default  class SearchService{
    static store = tagStore()
    static storeRefs = storeToRefs(SearchService.store)

    static firstTagActiveIndex:Ref<number>=ref(0)

    static tagList: Ref<Tag[]> = ref([])

    static secondTagList: Ref<Tag[]> = ref([])

    //查询标签数据
    static async getFirstTagList(){
        await SearchService.store.getTagList(1)
    }
    static changeTab(index: number){
        SearchService.firstTagActiveIndex.value=index;
    }

    static getSecondTagList(){
        watchEffect(async () => {
            await SearchService.store.getTagList(SearchService.firstTagActiveIndex.value+1)
        })
    }

}