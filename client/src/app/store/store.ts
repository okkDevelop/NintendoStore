import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { catalogApi } from "../../features/catalog/catalogApi";
import { errorApi } from "../../features/about/errorApi";
import { cartApi } from "../../features/cart/cartApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";
import { checkoutApi } from "../../features/checkOut/checkoutApi";
import { productCounterSlice } from "../../features/catalog/productCounterReducer";
import { newsApi } from "../../features/news/newsAPI";

export const store = configureStore({
    reducer: {
        [catalogApi.reducerPath]: catalogApi.reducer,
        [errorApi.reducerPath]: errorApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [checkoutApi.reducerPath]: checkoutApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
        productCounter: productCounterSlice.reducer,
        catalog: catalogSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            catalogApi.middleware,
            errorApi.middleware,
            cartApi.middleware,
            accountApi.middleware,
            checkoutApi.middleware,
            newsApi.middleware
        )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()