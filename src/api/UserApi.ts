import request from "@/utils/axiosUtil";

class GroupApi {
  static api : GroupApi = new GroupApi()
  getGroupList(){
    return request.get('/meaile/api/user/getUserInfo',false)
  }
}
export default GroupApi.api