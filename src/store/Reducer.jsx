
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART": {
  const itemIndex = state.cartItems.findIndex(
    (cartItem) => cartItem.id === action.payload.prod.id
  );
  if (itemIndex !== -1) {
    const updatedCartItems = [...state.cartItems];
    updatedCartItems[itemIndex] = {
      ...updatedCartItems[itemIndex],
      quantity: updatedCartItems[itemIndex].quantity + 1,
    };
      return {
        ...state,
        cartItems: updatedCartItems,
      };
  }

    return {
      ...state,
      cartItems: [
        ...state.cartItems,
        { ...action.payload.prod, quantity: 1 },
      ],
    };
  }

  case "UPDATECART":
    return {
      ...state,
      cartItems: action.payload,
    };

    case "REMOVEITEM": {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case "CLEARCART": {
      return {
        ...state,
        cartItems: [],
      };
    }

    case "INCREASEQTY": {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "DECREASEQTY": {
      const updatedCart = state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
            return {
        ...state,
        cartItems: updatedCart,
      };
    }

    default:
      return state;
  }
};
