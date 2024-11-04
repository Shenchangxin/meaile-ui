import {ref, Ref, watchEffect} from "vue";
import {Tag,store as tagStore} from "@/store/modules/tag.ts";




export  default  class SearchService{
    static firstTagActiveIndex:Ref<number>=ref(0)

    static tagList: Ref<Tag[]> = ref([])

    static secondTagList: Ref<Tag[]> = ref([])

    //查询标签数据
    static async getFirstTagList(){
        tagStore.actions.getTagList()
        SearchService.tagList.value = tagStore.getters.getTagList
    }
    static changeTab(index: number){
        SearchService.firstTagActiveIndex.value=index;
    }

    static getSecondTagList(){
        watchEffect(async () => {
            await tagStore.actions.getTagList(SearchService.firstTagActiveIndex.value+1)
            SearchService.secondTagList.value = tagStore.getters.getTagList
        })
    }

}