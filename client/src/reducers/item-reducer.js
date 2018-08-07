import { CREATE_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from '../actions/item-types';

import uuid from 'uuid';

const initialState = {
    items: [
            { _id: uuid(), name: 'item 1 reducer'},
            { _id: uuid(), name: 'item 2 reducer'},
            { _id: uuid(), name: 'item 3 reducer'},
            { _id: uuid(), name: 'item 4 reducer'},
            { _id: uuid(), name: 'item 5 reducer'}
    ],
    item: null,
    loading: false
};

export default function (state = initialState, {type, payload}) {
	switch (type){
        case GET_ITEMS:
            return {
                ...state,
                items: [...payload, ...state.items],
                loading: false
            };  
        case CREATE_ITEM:
            return {
                ...state,
                items: [payload, ...state.items],
                item: null
            };
        case EDIT_ITEM:
            return {
                ...state,
                item: state.items.find(item => item._id === payload)
            };
		case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((obj) => obj._id === payload._id ? { ...obj, name: payload.name } : obj),
                item: null
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== payload),
                item: null
            };   
        case ITEMS_LOADING:{
            return{
                ...state,
                loading: true
            }
        }   
        default:
            return state;
	}
}