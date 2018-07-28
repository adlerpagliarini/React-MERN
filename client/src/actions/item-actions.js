import { CREATE_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from '../actions/item-types';
import axios from 'axios';

export const getItems = () => dispatch => { //dispatch can be used here because we've thunk, and allow us to use async requests with dispatch    

    dispatch(setItemsLoading());
    axios.get('/api/items')
          .then( res => dispatch( { type: GET_ITEMS, payload: res.data } ));

    /*
    return { type: GET_ITEMS //will go to reducer and return the data };
    */
}

export const createItem = (item) => dispatch => {

  axios.post('/api/items', item).then(res => dispatch({
    type: CREATE_ITEM, payload: { id: res.data._id, name: res.data.name }
  }));
  
  /*
  return { type: CREATE_ITEM, payload: item };
  */
}

export const deleteItem = (id) => dispatch => {
  
  axios.delete(`/api/items/${id}`).then(res => dispatch({
    type: DELETE_ITEM, payload: id
  }))
  .catch(dispatch({type: DELETE_ITEM, payload: id}));

  /*
  return { type: DELETE_ITEM, payload: id };
  */
}

export const editItem = (id) => {
  return {
    type: EDIT_ITEM,
    payload: id
  };
}

export const updateItem = (item) => dispatch => {

  axios.put(`/api/items/${item.id}`, item).then(res => dispatch({
    type: UPDATE_ITEM, payload: { id: res.data._id, name: res.data.name }
  }))
  .catch(dispatch({type: UPDATE_ITEM, payload: item}));

  /*
  return { type: UPDATE_ITEM, payload: item };
  */
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
}