export const CREATE_LIST = "CREATE_LIST";
export const createList = (listName, products, checkedProducts) => ({
  type: CREATE_LIST,
  payload: { listName, products },
});

export const DELETE_LIST = "DELETE_LIST";
export const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: { id },
});

export const ADD_PRODUCT = "ADD_PRODUCT";
export const addProduct = (item, listId) => ({
  type: ADD_PRODUCT,
  payload: { item, listId },
});

export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const deleteProduct = (itemId) => ({
  type: DELETE_PRODUCT,
  payload: { itemId },
});

export const CHECK_PRODUCT = "CHECK_PRODUCT";
export const checkProduct = (itemId) => ({
  type: CHECK_PRODUCT,
  payload: { itemId },
});
