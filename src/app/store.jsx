import { configureStore } from "@reduxjs/toolkit";
import addtoCartReducer from "../features/addtoCartSlice";
const store=configureStore({
        reducer:{
            addtoCart:addtoCartReducer
        }
})

export default store
console.log(store.getState())