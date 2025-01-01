import UserApi from "@/api/UserApi.ts";
import BookApi from "@/api/BookApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage"
import {Book, Oss} from "@/store";

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
            books: [] as Book[],
            activeTab: "" as string,
        }
    },
    getters: {
        getUserInfo(state) {
            return state.user
        },
        getActiveTab(state){
            return state.activeTab === "" ? goodStorage.get('activeTab') : "作品"
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

        async getBooksByTab(tab:string){
            if (tab === '作品'){
                const result = await BookApi.getMyBooks()
                this.books = result.data
                console.log("作品："+result.data)
            }else if (tab === '推荐'){

            }else if (tab === '收藏'){

            }else if (tab === '喜欢'){

            }
            this.activeTab = tab
            goodStorage.set('activeTab',tab)
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