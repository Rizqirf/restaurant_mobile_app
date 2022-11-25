const initialValue = {
  itemDetail: {},
};

export default function detailReducers(state = initialValue, action) {
  switch (action.type) {
    case "item/fetchDetail":
      return { ...state, itemDetail: action.payload };
    default:
      return state;
  }
}
