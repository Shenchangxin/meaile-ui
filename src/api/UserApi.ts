import request from "@/utils/request";
import {LoginForm} from "@/store"

class UserApi {
  static api : UserApi = new UserApi()
  login(loginForm : LoginForm){
    return  request.post('/meaile/api/user/login', loginForm)
  }
  getUserInfo(){
    return request.get('/meaile/api/user/getUserInfo',false)
  }
}

export const login = (data?: any) => request.post('/meaile/api/user/login', data);
export default UserApi.api