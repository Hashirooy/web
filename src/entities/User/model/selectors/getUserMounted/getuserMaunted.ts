import { StateSchema } from "app/providers/StoreProvider"

export const getuserMounted = (state:StateSchema)=>{
    return state.user?._mounted
}