// untuk menjalankan ketik node redux di terminal
// reducer: Mengolah payload
import { legacy_createStore } from "redux"

const cartReducer = (state = {
    login: false,
    cart: [{
        id:1, qty:20
    }] // inisialisasi awal
}, action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload] // menambahkan data sebelumnya dan yang baru
            }
        default:
            return state
    }
}

// store:  Menyimpan state yang mempunyai reducer
const store = legacy_createStore(cartReducer) // dicoret karena sudah tidak digunakan
console.log("oncreate storeL ", store.getState())

// subscribe : Melihat perubahan yang terjadi dalam store
store.subscribe(()=>{
    console.log("STORE CHANGE ", store.getState())
})

//dispatch : Mengirimkan payload ke store
const action1 = {type: "ADD_TO_CART", payload: {id:2, qty:20}}
store.dispatch(action1)

const action2 = {type: "ADD_TO_CART", payload: {id:10, qty:20}}
store.dispatch(action2)