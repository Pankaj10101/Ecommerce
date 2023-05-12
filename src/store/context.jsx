import { createContext, useReducer } from "react";
import { reducer } from "./Reducer";

export const Store = createContext();

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 1,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 1,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const Context = ({ children }) => {
  const initialvalue = {
    items: productsArr,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(reducer, initialvalue);

  const addToCart = (prod, id) => {
    dispatch({
      type: "ADDTOCART",
      payload: {
        prod,
        id,
      },
    });
    console.log(state.cartItems);
  };

  const increaseQty = (id) => {
    dispatch({
      type: "INCREASEQTY",
      payload: {
        id,
      },
    });
  };

  const decreaseQty = (id) => {
    dispatch({
      type: "DECREASEQTY",
      payload: {
        id,
      },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVEITEM",
      payload: {
        id,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEARCART",
    });
  };

  const sendData = async (userData) => {
  await  fetch('https://react-ecommerce-cdc2d-default-rtdb.firebaseio.com/userdata.json', {
        method : 'POST',
        body : JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json'
        }
    })
  };
  return (
    <Store.Provider
      value={{
        ...state,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        sendData,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Context;
