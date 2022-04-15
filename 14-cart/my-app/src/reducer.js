const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "LOADING":
      return { ...state, loading: true };
    case "GET_TOTALS":
      return getTotals(state, action);
    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };
    case "TOGGLE_AMOUNT":
      return toggleAmount(state, action);
    default:
      throw new Error("no matching action type");
  }
};

const getTotals = (state, action) => {
  let { total, amount } = state.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    },
    {
      total: 0,
      amount: 0,
    }
  );
  total = parseFloat(total.toFixed(2));
  return { ...state, total, amount };
};

const toggleAmount = (state, action) => {
  let tempCart = state.cart
    .map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (action.payload.type === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if (action.payload.type === "dec") {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }
      return cartItem;
    })
    .filter((cartItem) => cartItem.amount !== 0);
  return { ...state, cart: tempCart };
};

export default reducer;
