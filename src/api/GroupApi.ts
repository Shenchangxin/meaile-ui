import request from "@/utils/request";

class GroupApi {
    static api : GroupApi = new GroupApi()
    getGroupList(){
        return request.get('/meaile/api/group/getGroupList',false)
    }
}
export default GroupApi.api
