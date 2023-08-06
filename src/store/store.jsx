import { configureStore } from "@reduxjs/toolkit";
import { originSlice } from './miSlice'

export default configureStore({
	reducer: {
		myValue:originSlice.reducer,
	},
});
