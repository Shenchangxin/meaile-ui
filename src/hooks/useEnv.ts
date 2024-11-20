export function useEnv() {
    const {  VITE_MOCK_BASE_API,VITE_BASE_API,  MODE ,VITE_IS_MOCK,} = import.meta.env;

    return {
        MODE,
        VITE_IS_MOCK,
        VITE_BASE_API,
        VITE_MOCK_BASE_API,

    };
}
