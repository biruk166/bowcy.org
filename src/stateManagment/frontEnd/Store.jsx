import { configureStore} from "@reduxjs/toolkit"
import { displaySlice } from "./DisplayState"




export default configureStore({
    reducer: {
        display: displaySlice.reducer
    }
})


