import request from "@/utils/request";

class BookAPI {
    static api: BookAPI = new BookAPI()
    getBookList(tagId: number){
        return request.get('/meaile/api/book/getBookListByTagId'+'?tagId='+tagId)
    }
}