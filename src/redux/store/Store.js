import { applyMiddleware, compose, createStore } from "redux";
import { Renducerweater } from "../reducer/render";
import {thunk} from "redux-thunk"


const reactreducttool = window.__REDUX_DEVTOOLS_EXTENSION__ &&window.__REDUX_DEVTOOLS_EXTENSION__()
export const Store = createStore(Renducerweater,
    compose(applyMiddleware(thunk),
    reactreducttool
)
);