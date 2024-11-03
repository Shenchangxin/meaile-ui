import {ref, Ref} from "vue";
import {Tag,store as tagStore} from "@/store/modules/tag.ts";




class SearchService{
    static firstTagActiveIndex:Ref<number>=ref(0)

    static tagList: Ref<Tag[]> = ref([])

    //查询标签数据
    static async getTagList(){
        tagStore.actions.getTagList()
    }
}