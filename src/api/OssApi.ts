import request from "@/utils/request";

class OssAPI {
    static api: OssAPI = new OssAPI()
    getOssListByParam(suffix:string,createdBy:string){
        return request.get('/meaile/api/oss/getOssList'+'?&suffix='+suffix+'&createdBy='+createdBy)
    }
}
export default OssAPI.api