import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools} from "redux-devtools-extension"
import { productListReducer,productDetailsReducer } from "./reducers/productReducer"
import { CartReducer } from "./reducers/cartReducer"


const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
    
})
//reducers-type of event lIsteners with action and initial state //basically kisi action ke hone pr kya change ho
const cartItemsFromLocalStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[] 

const middleware=[thunk]
const initialState={
    cart:{cartItems:cartItemsFromLocalStorage}
}

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store