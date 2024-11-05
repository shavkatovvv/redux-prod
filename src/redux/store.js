import {
    configureStore,
    createListenerMiddleware,
    isAnyOf,
} from "@reduxjs/toolkit";
import productReducer from "./reducers/product-reducer";
import { loadState, saveState } from "./storage";
import { addProd, deleteProd, totalCount } from "./reducers/product-reducer";

const totalCountMiddlware = createListenerMiddleware();
totalCountMiddlware.startListening({
    matcher: isAnyOf(addProd, deleteProd),
    effect: (action, api) => {
        api.dispatch(totalCount());
    },
});

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    preloadedState: {
        products: loadState("prod"),
    },
});

store.subscribe(() => {
    saveState("prod", store.getState().products);
});
