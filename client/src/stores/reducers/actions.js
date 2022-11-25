const base_url = "https://shrouded-sands-12205.herokuapp.com";
// const base_url = "http://localhost:3000";

export const fetchItems = (category) => {
  return (dispatch) => {
    let str = category ? `?category=${category}` : "";
    fetch(`${base_url}/clients/items${str}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error fetch items`);
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchItems",
          payload: data,
        })
      )
      .catch(console.log);
  };
};
export const fetchCategories = () => {
  return (dispatch) => {
    fetch(`${base_url}/clients/categories`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error fetch items`);
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "data/fetchCategories",
          payload: data,
        })
      )
      .catch(console.log);
  };
};
export const fetchItemDetail = (id) => {
  return (dispatch) => {
    fetch(`${base_url}/clients/items/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error fetch item detail`);
        return res.json();
      })
      .then((data) =>
        dispatch({
          type: "item/fetchDetail",
          payload: data,
        })
      )
      .catch(console.log);
  };
};
