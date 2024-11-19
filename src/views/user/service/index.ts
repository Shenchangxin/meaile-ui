import { LoginForm, userStore } from "@/store"
import { storeToRefs } from "pinia"

export  default  class UserService {
  static store = userStore()
  static storeRefs = storeToRefs(UserService.store)

  static async login(loginForm:LoginForm){
    await UserService.store.login(loginForm)
  }

}