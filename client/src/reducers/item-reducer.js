import { CREATE_ITEM, EDIT_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from '../actions/item-types';

import uuid from 'uuid';

const initialState = {
    items: [
            { id: uuid(), name: 'item 1 reducer'},
            { id: uuid(), name: 'item 2 reducer'},
            { id: uuid(), name: 'item 3 reducer'},
            { id: uuid(), name: 'item 4 reducer'},
            { id: uuid(), name: 'item 5 reducer'}
    ],
    item: null,
    loading: false
};

export default function (state = initialState, {type, payload}) { //function itemReducer(state = [], action) {
	switch (type){ //switch (action.type){
        case GET_ITEMS:
            return {
                ...state,
                items: [...payload.map((obj) => 
                        {//obj._id ? { ...obj, id: obj._id, name: obj.name } : obj
                            return { id: obj._id, name: obj.name}
                        }), ...state.items],
                loading: false
            };  
        case CREATE_ITEM:
            return {
                ...state,
                items: [payload, ...state.items],
                item: null
            };
        case EDIT_ITEM:
            /* 
            //if I were using a editing property inside the item, to update them
            //like this - { id: uuid(), name: 'item 1 reducer', editing: false },
            let changeEditingValue = state.items.map((obj)=>obj.id === payload ? { ...obj, editing:!obj.editing } : obj);
            console.log(changeEditingValue); //foreach item, change editing property if were needed
            */
            return {
                ...state, //I dont have to return state if I return items: state.items or items: []
                //items: changeEditingValue,
                item: state.items.find(item => item.id == payload)
            };
		case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map((obj) => obj.id == payload.id ? { ...obj, name: payload.name } : obj),
                item: null
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== payload),
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