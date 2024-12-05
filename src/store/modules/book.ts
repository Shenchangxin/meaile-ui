import bookApi from "@/api/BookApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage";

export interface Book {
    id: number,
    bookName: string,
    image: string,
    introduction: string,
    favorite: number,
    sort: number,
    status: string,
    createdBy: string,
    createdTime: string,
    updatedBy: string
    updatedTime: string,
}

export const bookStore = defineStore('bookStore', {
    state: () => {
        return {
            book : {} as Book,
            bookListByTag: [] as Book[]
        }
    },
    getters: {
        getBookListByTag(state){
            return state.bookListByTag
        }
    },
    actions: {
        async getBookListByTag(tagId: number) {
            const result = await bookApi.getBookListByTag(tagId)
            this.bookListByTag = result.data
            // goodStorage.set('bookListByTag', result.data)
            // this.secondTagList = result.data
            console.log("bookListByTag:" + this.bookListByTag)
        },
    }

})