import { createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools} from "redux-devtools-extension"
import { productListReducer,productDetailsReducer } from "./reducers/productReducer"
import { CartReducer } from "./reducers/cartReducer"
import { userLoginReducer, userRegisterReducer,userDetailsReducer,userUpdateProfileReducer} from "./reducers/userReducer"
import { orderCreateReducer,orderDetailsReducer,orderPayReducer } from "./reducers/orderReducer"



const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:CartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer,
    
})
//reducers-type of event lIsteners with action and initial state //basically kisi action ke hone pr kya change ho
const cartItemsFromLocalStorage=localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[] 

// user data from local storage

const userInfoFromLocalStorage=localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):null


const shippingAddressFromLocalStorage=localStorage.getItem('shippingAddress')?
JSON.parse(localStorage.getItem('shippingAddress')):[]

const middleware=[thunk]
const initialState={
    cart:{cartItems:cartItemsFromLocalStorage,
    shippingAddress:shippingAddressFromLocalStorage},
    userLogin:{userInfo:userInfoFromLocalStorage},
    
}

const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store