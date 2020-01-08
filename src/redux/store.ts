import { configureStore } from '@reduxjs/toolkit';
import {rootReducer} from "./reducers";
export function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });

    return store;
}