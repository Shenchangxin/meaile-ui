/// <reference types="vite/client" />

interface ImportMetaEnv{
    VITE_BASE_API:string,
    VITE_IS_MOCK:boolean,
    VITE_MOCK_BASE_API:string,

}
interface ImportMeta {
    readonly env: ImportMetaEnv
}