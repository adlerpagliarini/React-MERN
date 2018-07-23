import { CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/item-types';

export const getItems = () => {
    return {
      type: GET_ITEMS //will go to reducer and return the data
    };
}