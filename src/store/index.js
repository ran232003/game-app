import { configureStore } from "@reduxjs/toolkit";
import TableSlice from "./tableSlice";

const store = configureStore({
  reducer: { tableData: TableSlice.reducer },
});
export default store;
