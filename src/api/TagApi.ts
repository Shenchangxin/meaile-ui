import request from "@/utils/request";

class TagApi {
    static api : TagApi = new TagApi()
    getTagListByParentId(id:number){
        return request.get('/meaile/api/tag/getTagListByParentId'+'?parentId='+id )
    }
}
export default TagApi.api
