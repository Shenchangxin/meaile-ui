import request from "@/utils/axiosUtil";

class UserApi {
  static api : UserApi = new UserApi()
  getUserInfo(){
    return request.get('/meaile/api/user/getUserInfo',false)
  }
}
export default UserApi.api