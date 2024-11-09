import request from "@/utils/axiosUtil";

class TagApi {
    static api : TagApi = new TagApi()
    getTagList(id:number){
        return request.get('/meaile/api/tag/getTagList'+'?id='+id ,false)
    }
}
export default TagApi.api
