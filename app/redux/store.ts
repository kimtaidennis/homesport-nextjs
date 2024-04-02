import { configureStore } from "@reduxjs/toolkit"
import { feedSlice } from "./slices/feeds.slice"

export const createStore = () => configureStore({
    reducer: {
        feeds: feedSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];