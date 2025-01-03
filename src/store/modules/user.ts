import UserApi from "@/api/UserApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage"
import {Oss} from "@/store";

export interface User {
    username: string,
    id: number,
    avatar: string,
    avatarOssObj: Oss,
    nickname: string,
}

export interface LoginForm {
    username: string,
    password: string,
}

export interface Claims {
    token: string,
    Id: number,
    username: string,
    nickname: string,
}

export const userStore = defineStore('userStore', {
    state: () => {
        return {
            user: {} as User,
            claims: {} as Claims,
        }
    },
    getters: {
        getUserInfo(state) {
            return state.user
        }
    },
    actions: {
        storeClaims(claims: Claims) {
            goodStorage.set('claims', claims)
            goodStorage.set('token', claims.token)
            this.claims = claims
        },
        //users
        async getUserInfoActions() {
            const result = await UserApi.getUserInfo()
            this.user = result.data
            console.log(this.user)
        },

        async login(loginForm: LoginForm) : Promise<number> {
            try {
                const result = await UserApi.login(loginForm)
                console.log(result.data)
                if (result && result.code === 200){
                    this.claims = result.data
                    this.storeClaims(result.data)
                }
                return result.code
            }catch (error){
                console.log("调用登录接口失败："+error)
                return 500
            }

        }
    }

})