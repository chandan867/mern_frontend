export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: true,
        order: action.payload,
        success: true,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const orderDetailsReducer = (state = {loading:true,orderItems:[],shippingAddress:{}}, action) => {
  switch (action.type) {
    case "ORDER_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_DETAILS_SUCCESS":
      return {
        loading: true,
        order: action.payload,
        // success: true,
      };
    case "ORDER_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
