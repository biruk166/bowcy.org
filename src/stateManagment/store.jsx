import { configureStore} from "@reduxjs/toolkit"
import StateSlice from "./StateSlice"
import counterSlice from "./counterSlice"

export const store = configureStore({
    reducer: {
        appState: StateSlice,
        counter: counterSlice,
    },
})


