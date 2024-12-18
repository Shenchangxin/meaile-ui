import { LoginForm, userStore } from "@/store"
import { storeToRefs } from "pinia"
import { ElMessage } from 'element-plus';
import router from "@/router"
import { ref, Ref } from "vue"

export default class UserService {
  static store = userStore()
  static storeRefs = storeToRefs(UserService.store)
  static selectedIndex:Ref<number>=ref(0)

  static async login(loginForm: LoginForm) {
    try {
      const resultCode = await UserService.store.login(loginForm)
      if (200 === resultCode){
        this.loginSuccess()
      }else {
        this.loginFailed()
        ElMessage.error("登录失败，请检查用户名密码后重试")
      }
    }catch (error){
      console.log("登录失败："+error)
      ElMessage.error("登录失败，请检查网络问题")
    }

  }

  static loginSuccess() {
    router.push({ name: "search" })
  }
  static loginFailed() {
    router.push({ name: "login" })
  }

  static selectIndex = (index: number) => {
    this.selectedIndex.value = index; // 更新选中的标签索引
  }

}