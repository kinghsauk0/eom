import { configureStore  } from "@reduxjs/toolkit";
import { getBannerApi } from "../feature/RTKbanner";


export const store = configureStore({
  reducer: {
    [getBannerApi.reducerPath]: getBannerApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(getBannerApi.middleware),
});
