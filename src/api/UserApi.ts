import request from "@/utils/axiosUtil";
import {LoginForm} from "@/store"

class UserApi {
  static api : UserApi = new UserApi()
  login(loginForm : LoginForm){
    return request.post('/meaile/api/user/login',false,loginForm)
  }
  getUserInfo(){
    return request.get('/meaile/api/user/getUserInfo',false)
  }
}
export default UserApi.api