import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { cartSlice } from "../features/cart/cartSlice";
import { ownerSlice } from "../features/owner/ownerSlice";
import thunk from 'redux-thunk'
import { menuSlice } from "../features/menu/menuSlice";
import { api } from "../services/fidelityApi";

let state = {
    owner: {},
    list: [
    ]
};

export const store = configureStore(
    {
        preloadedState: state,
        reducer: combineReducers({
            owner: ownerSlice.reducer,
            list: cartSlice.reducer,
            menu: menuSlice.reducer,
            [api.reducerPath]: api.reducer,
        }),
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware).concat(thunk),
    }
)