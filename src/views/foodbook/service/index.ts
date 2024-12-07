import {storeToRefs} from "pinia";
import {bookStore} from '@/store/modules/book.ts'
import SearchService from '@/views/search/service/index.ts'

export default class Books {
    static store = bookStore()
    static storeRefs = storeToRefs(Books.store)
    static getBookListByTagId(){
        const secondTagId = SearchService.store.getSecondTag.id
        Books.store.getBookListByTagId(secondTagId)
    }

}