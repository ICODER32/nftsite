import { configureStore } from "@reduxjs/toolkit";

import walletReducer from "./wallet/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});

export default store;
