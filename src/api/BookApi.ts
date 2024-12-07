import request from "@/utils/request";

class BookAPI {
    static api: BookAPI = new BookAPI()
    getBookListByTagId(tagId: number){
        return request.get('/meaile/api/book/getBookListByTagId'+'?tagId='+tagId)
    }
}
export default BookAPI.api