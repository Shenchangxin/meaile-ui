import { createPinia } from 'pinia';

const pinia = createPinia();
export default pinia;
export * from './modules/tag.ts';
export * from './modules/user.ts';
export * from './modules/book.ts';
// export default function useStore() {
//     return {
//         userStore: userStore(),
//         tagStore: tagStore(),
//
//     }
// }