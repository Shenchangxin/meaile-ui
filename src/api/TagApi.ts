import request from "@/utils/axiosUtil";

class TagApi {
    static api : TagApi = new TagApi()
    getTagList(){
        return request.get('/meaile/api/tag/getTagList',false)
    }
}
export default TagApi.api
