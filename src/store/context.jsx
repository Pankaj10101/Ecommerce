import { createContext, useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import axios from "axios";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const userMail = localStorage.getItem("userMail");
  const API = `https://authentica-a7b13-default-rtdb.firebaseio.com/${userMail}`;

  const initialvalue = {
    items: productsArr,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(reducer, initialvalue);
  const addToCart = async (prod, id) => {
    const itemIndex = state.cartItems.findIndex(
      (cartItem) => cartItem.id === id
    );
    if (itemIndex !== -1) {
      const response = await axios(`${API}.json`);
      const data = await response.data;
      for (let key in data) {
        if (data[key].id === id) {
          const currentQuantity = data[key].quantity;
          const updatedQuantity = currentQuantity + 1;
          console.log(`${API}/${key}.json`);
          console.log({ ...prod, quantity: updatedQuantity });
          await axios.put(`${API}/${key}.json`, {
            ...prod,
            quantity: updatedQuantity,
          });
        }
      }
    } else {
      console.log(prod);
      axios.post(`${API}.json`, { ...prod });
    }
    dispatch({
      type: "ADDTOCART",
      payload: {
        prod,
        id,
      },
    });
  };

  const updateAxiosCart = async (apiUrl) => {
    try {
      const response = await axios(`${apiUrl}.json`);
      const data = response.data;
  
      const cartItems = Object.values(data);
      dispatch({
        type: "UPDATECART",
        payload: cartItems,
      });
    } catch (error) {
      console.log("Error updating cart:", error);
    }
  };
  
  
  useEffect(() => {
    const loginToken = localStorage.getItem("loginId");
    if (loginToken) {
      setLoggedIn(true);
  
      const userMail = localStorage.getItem("userMail");
      const updatedAPI = `https://authentica-a7b13-default-rtdb.firebaseio.com/${userMail}`;
  
      updateAxiosCart(updatedAPI);
    } else {
      const cartItems = []
      dispatch({
        type : 'UPDATECART',
        payload : cartItems
      })
      setLoggedIn(false);
    }
  }, [loggedIn]);
  

  const increaseQty = async (id) => {
    const response = await axios(`${API}.json`);
    const data = await response.data;
    for (let key in data) {
      if (data[key].id === id) {
        const currentQuantity = data[key].quantity;
        const updatedQuantity = currentQuantity + 1;
        await axios.put(`${API}/${key}.json`, {
          ...data[key],
          quantity: updatedQuantity,
        });
      }
    }
    dispatch({
      type: "INCREASEQTY",
      payload: {
        id,
      },
    });
  };

  const decreaseQty = async (id) => {
    const response = await axios(`${API}.json`);
    const data = await response.data;
    for (let key in data) {
      if (data[key].id === id) {
        const currentQuantity = data[key].quantity;
        const updatedQuantity = currentQuantity - 1;
        if (updatedQuantity > 0) {
          await axios.put(`${API}/${key}.json`, {
            ...data[key],
            quantity: updatedQuantity,
          });
        }
      }
    }
    dispatch({
      type: "DECREASEQTY",
      payload: {
        id,
      },
    });
  };

  const removeFromCart = async (id) => {
    const response = await axios(`${API}.json`);
    const data = await response.data;
    for (let key in data) {
      if (data[key].id === id) {
        await axios.delete(`${API}/${key}.json`);
      }
    }

    dispatch({
      type: "REMOVEITEM",
      payload: {
        id,
      },
    });
  };

  const clearCart = () => {
    axios.delete(`${API}.json`);
    dispatch({
      type: "CLEARCART",
    });
  };

  const sendData = async (userData) => {
    await fetch(
      "https://react-ecommerce-cdc2d-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
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
        setLoggedIn,
        setToken,
        loggedIn,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Context;
