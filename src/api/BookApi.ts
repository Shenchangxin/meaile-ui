import request from "@/utils/request";

class BookAPI {
    static api: BookAPI = new BookAPI()
    getBookListByTagId(tagId: number,sortField:string,ascOrDesc:string){
        return request.get('/meaile/api/book/getBookListByTagId'+'?tagId='+tagId+'&sortField='+sortField+'&ascOrDesc='+ascOrDesc)
    }

    getMyBooks(){
        return request.get('/meaile/api/book/getMyBooks')
    }
}
export default BookAPI.api