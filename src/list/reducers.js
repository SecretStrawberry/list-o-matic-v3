import cloneDeep from "lodash/cloneDeep";

import {
  CREATE_LIST,
  DELETE_LIST,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  CHECK_PRODUCT,
} from "./actions";

// initialState = [{
//  listName: listName,
//  products: [{
//              item: itemName,
//              itemid: "",
//              isChecked: false
//            }],
// id: "",
// }]

// function to create the id`s of lists objects and item objects
function randomId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const lists = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_LIST: {
      const { listName = "", products = [] } = payload;

      const newList = {
        listName,
        products,
        id: randomId(),
      };
      // cloning the state
      const newState = cloneDeep(state);
      // adding the new list object to the state array, the text of list is the id
      return newState.concat(newList);
    }

    case DELETE_LIST: {
      const { id } = payload;
      const newState = cloneDeep(state);
      // we filter the through the list array and we return the whole list array
      // without the list that has the id that is coming from payload
      // this method erase the whole list object including the products array, as intended
      return newState.filter((list) => list.id !== id);
    }

    case ADD_PRODUCT: {
      // passed the id of the list object from NewProductForm props as an obj
      const { item, listId } = payload;

      const newItem = {
        item,
        itemId: randomId(),
        isChecked: false,
      };

      const newState = cloneDeep(state);
      // maping over the cloned state
      return newState.map((things) => {
        // checking if the listId of the list object id matches the id that is comming from payload(component)
        if (things.id === listId) {
          return {
            // leaving the name unchanged
            listName: things.listName,
            // concatenating the new item object to products array
            products: things.products.concat(newItem),
            // leaving the id unchanged
            id: things.id,
          };
        }
        // returning the list object as it is if id`s do not match
        return things;
      });
    }

    case DELETE_PRODUCT: {
      const { itemId } = payload;
      const newState = cloneDeep(state);

      return newState.map((things) => {
        if (itemId) {
          return {
            listName: things.listName,
            // we filter through the products array and we return the array of item objects
            // without the item object that has the itemId that is comming from paylaod
            products: things.products.filter((item) => item.itemId !== itemId),
            id: things.id,
          };
        }
        return things;
      });
    }

    case CHECK_PRODUCT: {
      const { itemId } = payload;
      const newState = cloneDeep(state);

      return newState.map((things) => {
        if (itemId) {
          return {
            listName: things.listName,
            // maping over the product array to see the item objects
            products: things.products.map((item) => {
              // verify if the itemId is the same as payload id
              if (item.itemId === itemId) {
                // if it is the same id`s, we return the whole item and we toggle the isChecked property
                return { ...item, isChecked: !item.isChecked };
              }
              // else we return the item as it is with no changes
              return item;
            }),
            id: things.id,
          };
        }
        return things;
      });
    }

    default:
      return state;
  }
};
