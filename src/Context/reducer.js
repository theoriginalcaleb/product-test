export    const reducer = (state,action)=>{
    switch(action.type){
        case "GET_PRODUCT":
            return {...state,products:action.payload};
        case "ADD_TO_CART":
return{...state,cart:[...state.cart,{...action.payload}]};  

            // return {...state,cart:action.payload}
        default:
            return state;

    }
}