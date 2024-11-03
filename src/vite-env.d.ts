/// <reference types="vite/client" />

interface ImportMetaEnv{
    VITE_BaseApi:string,
    VITE_IsMock:boolean,
    VITE_MockBaseApi:string,

}
interface ImportMeta {
    readonly env: ImportMetaEnv
}