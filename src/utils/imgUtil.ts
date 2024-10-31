import goodStorage from 'good-storage'
export class ImgUtil {
    static imgList:Record<string,string> = {}

    static storageImgList(){
        this.imgList = goodStorage.get('imgList') || {}
        if (this.isEmpty()){
            this.loadAllImg()
            goodStorage.set('imgList',this.imgList)
        }
    }

    static isEmpty(){
        return !Object.getOwnPropertyNames(this.imgList).length
    }
    static getImg(imgName:string){
        return ImgUtil.imgList[imgName]
    }
    static loadAllImg(){
        const imgMap = import.meta.glob('../assets/**')
        let absolutePath:string=""//绝对路径
        let imgName:string=""//图片名
        for (let relativePath in imgMap){
            absolutePath = imgMap[relativePath].name;
            if (absolutePath){
                imgName=absolutePath.substring(absolutePath.lastIndexOf("/")+1)
                ImgUtil.imgList[imgName]=absolutePath
            }
        }
        console.log(ImgUtil.imgList)
        goodStorage.set('imgList',ImgUtil.imgList)
    }
}