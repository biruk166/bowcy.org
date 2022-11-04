import { configureStore} from "@reduxjs/toolkit"
import { SetCurrent } from "./SetCurrentArticle"



export const store = configureStore({
    reducer: {
        current: SetCurrent,
    },
})


