import { useReducer, createContext } from "react";


const CartContext = createContext();

let CartReducer=(state, action)=>{
    switch(action.type)  {
         
        case 'addtocart':
       const existingItem = state.cartItems.find(item => item.id === action.payload.id);
if (existingItem) { 
   // If the item already exists, update the quantity       
    return {
      ...state,  
      cartItems: state.cartItems.map(item =>  
        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ), 
      };
     } 
     else 
      {  // If the item doesn't exist, add it with quantity 1       
         return {...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }], 
      }; 
      }

        case 'removefromcart': return{...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload.id) }
    }
}
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, {cartItems:[]});

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;