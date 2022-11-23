const initialValue = {
  items: [],
  categories: [],
};

export default function dataReducers(state = initialValue, action) {
  switch (action.type) {
    case "data/fetchItems":
      return { ...state, items: action.payload };
    case "data/fetchCategories":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
