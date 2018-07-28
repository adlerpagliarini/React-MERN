import { CREATE_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/item-types';

export const getItems = () => {
    return {
      type: GET_ITEMS //will go to reducer and return the data
    };
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
}

export const createItem = (item) => {
  return {
    type: CREATE_ITEM,
    payload: item
  };
}

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    payload: id
  };
}

export const updateItem = (item) => {
  return {
    type: UPDATE_ITEM,
    payload: item
  };
}