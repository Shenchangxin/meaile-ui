import request from "@/utils/axiosUtil";

class TagApi {
    static api : TagApi = new TagApi()
    getTagListByParentId(id:number){
        return request.get('/meaile/api/tag/getTagListByParentId'+'?parentId='+id ,false)
    }
}
export default TagApi.api
