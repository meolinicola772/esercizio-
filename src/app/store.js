import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../slices/counterSlice";
import todosReducer from "../slices/todosSlice";
import usersReducer from "../slices/usersSlice";

import loggingMiddleware from "../middleware/loggingMiddleware";
import delayMiddleware from "../middleware/delayMiddleware";

const store = configureStore({

 reducer:{

    counter:counterReducer,

    todos:todosReducer,

    users:usersReducer

}

    middleware:(getDefaultMiddleware)=>

        getDefaultMiddleware().concat(

            loggingMiddleware,

            delayMiddleware

        )

});

export default store;