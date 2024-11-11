import {userStore} from '@/store/modules/user.ts'
import {tagStore} from '@/store/modules/tag.ts'

export default function useStore() {
    return {
        userStore: userStore(),
        tagStore: tagStore(),

    }
}