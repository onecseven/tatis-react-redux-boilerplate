import { configureStore } from "@reduxjs/toolkit"
import InputReducer from "./components/InputSlice"

export default configureStore({
  reducer: {
    input: InputReducer,
    preloadedState: {},
  },
})
