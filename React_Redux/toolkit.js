import {configureStore, createAction, createReducer}  from "@reduxjs/toolkit"
//createAction
const addToCart = createAction("ADD_TO_CART")

// Reducer
const cartReducer = createReducer([], (builder)=>{
    builder.addCase(addToCart, (state, action)=>{
        // state.cart = [...state.cart, action.payload], // cara 1
        state.push(action.payload) // cara 2
    })
}) // function yang disediakan untuk membuat reducer

const login = createAction("CREATE_SESSION")
const loginReducer = createReducer({status: false}, (builder)=>{
    builder.addCase(login, (state, action)=>{
        state.status = true
    })
})

// Store, jika menggunakan toolkit bisa membuat beberapa reducer
const store = configureStore({
    reducer: {
        login: loginReducer, // memanggil reducer
        cart: cartReducer
    }
})
console.log("oncreate store: ", store.getState())

// subscribe : Melihat perubahan yang terjadi dalam store
store.subscribe(()=>{
    console.log("STORE CHANGE ", store.getState())
})
// dispatch
const action1 = addToCart({id:1, qty:20})
store.dispatch(action1)

store.dispatch(addToCart({id:2, qty:20}))
store.dispatch(login())