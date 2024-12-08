import bookApi from "@/api/BookApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage";


// function hasProps(obj: Record<string, any>) {
//     return Boolean(Object.getOwnPropertyNames(obj).length)
// }

function hasListItemProps(list: Book[]) {
    return Boolean(list.length > 0)
}
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
            return hasListItemProps(state.bookListByTag) ? state.bookListByTag : goodStorage.get('bookListByTag')
        }
    },
    actions: {
        async getBookListByTagId(tagId: number,sortField:string,ascOrDesc:string) {
            const result = await bookApi.getBookListByTagId(tagId,sortField,ascOrDesc)
            this.bookListByTag = result.data
            goodStorage.set('bookListByTag', result.data)
            console.log("bookListByTag:" + this.bookListByTag)
        },
    }

})