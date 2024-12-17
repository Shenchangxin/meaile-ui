import ossApi from "@/api/OssApi.ts";
import {defineStore} from "pinia";
import goodStorage from "good-storage";


// function hasProps(obj: Record<string, any>) {
//     return Boolean(Object.getOwnPropertyNames(obj).length)
// }

function hasListItemProps(list: Oss[]) {
  return Boolean(list.length > 0)
}
export interface Oss {
  id: number,
  ossId: string,
  fileName: string,
  suffix: string,
  fileUrl: string,
  createdBy: string,
  createdTime: string,
  updatedBy: string
  updatedTime: string,
}

export const ossStore = defineStore('ossStore', {
  state: () => {
    return {
      oss : {} as Oss,
      ossList: [] as Oss[]
    }
  },
  getters: {
    getOssList(state){
      return hasListItemProps(state.ossList) ? state.ossList : goodStorage.get('ossList')
    }
  },
  actions: {
    async getOssListByParam(suffix:string,createdBy:string) {
      const result = await ossApi.getOssListByParam(suffix,createdBy)
      this.ossList = result.data
      goodStorage.set('ossList', result.data)
      console.log("ossList:" + this.ossList)
    },
  }

})