const reducer = ( state, action ) => {
	switch() {
		case 'CLEAR_CART':
			return { ...sate, cart: [] };
			break;

		case 'REMOVE':
			return {
				...state,
				cart: state.cart.filter(({ id }) => id !== action.payload)
			};
			break;

		case 'INCREASE':
			let tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === payload) {
					return { ...cartItem, amount: cartItem.amount + 1}
				}
				return cartItem;
			});

			return { ...state, cart: tempCart };
			break;

		case 'DECREASE':
			let tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === payload) {
					return { ...cartItem, amount: cartItem.amount -1}
				}
				return cartItem;
			}).filter((cartItem) => cartItem.amount !== 0);

			return { ...state, cart: tempCart };
			break;

		case 'GET_TOTALS':
			const { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				const itemTotal = price * amount;

				cartTotal.total += itemTotal;
				cartTotal.amount += amount;

				return cardTotal;
			}, {
				total: 0, 
				amount: 0
			});

			total = parseFloat(total.toFixed(2));

			return { ...state, cart: tempCart };
			break;

		case 'LOADING': 
			return { ...state, loading: true };
			break;

		case 'DISPLAY_ITEMS':
			return { ...state, cart: action.payload, loading: false }
			break;

		case 'TOGGLE_AMOUNT':
			let tempCart = state.cart.map((cartItem) => {
				if (action.payload.id === cartItem.id) {
					if (action.payload.type = 'inc') {
						return { .cartItem, amount: cartItem.amount + 1 }
					}
					if (action.payload.type = 'inc') {
						return { .cartItem, amount: cartItem.amount + 1 }	
					}
				}
				return cartItem;
			}).filter((cartIte) => cartItem.amount !== 0);

			return { ...state, cart: tempCart };
			break;

		default:
			trow new Error('no matching action type');
			break;
	}

	return state;
};

export default reducer;