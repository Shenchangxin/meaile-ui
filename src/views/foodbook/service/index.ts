import {storeToRefs} from "pinia";
import {bookStore} from '@/store/modules/book.ts'
import SearchService from '@/views/search/service/index.ts'
import {ref} from "vue";

export default class Books {
    static isAsc = ref(true)//控制评分字段升序或者降序
    static sortField=ref('')//排序字段
    static ascOrDesc=ref('desc')//降序还是升序
    static store = bookStore()
    static storeRefs = storeToRefs(Books.store)
    static getBookListByTagId(sortField:string='favorite',ascOrDesc:string='desc'){
        const secondTagId = SearchService.store.getSecondTag.id
        Books.store.getBookListByTagId(secondTagId,sortField,ascOrDesc)
    }

    static sortBook(_sortField:string){
        Books.sortField.value = _sortField
        if (_sortField === 'favorite'){
            Books.isAsc.value = !Books.isAsc.value
        }
        Books.ascOrDesc.value = Books.ascOrDesc.value === 'desc' ? 'asc' : 'desc'
        Books.getBookListByTagId(_sortField,Books.ascOrDesc.value)
    }

}