import { CREATE_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/item-types';

import uuid from 'uuid';

const initialState = {
    items: [
            { id: uuid(), name: 'item 1 reducer' },
            { id: uuid(), name: 'item 2 reducer' },
            { id: uuid(), name: 'item 3 reducer' },
            { id: uuid(), name: 'item 4 reducer' },
            { id: uuid(), name: 'item 5 reducer' }
    ]
    //item: {}
};

export default function (state = initialState, {type, payload}) { //function itemReducer(state = [], action) {
	switch (type){ //switch (action.type){
        case GET_ITEMS:
            return {
                ...state
            };  
        case CREATE_ITEM:
            return {
                ...state
                //item: payload
            };
		case UPDATE_ITEM:
            return {
                ...state
                //item: payload
            };
        case DELETE_ITEM:
            return {
                ...state
                //item: payload
            };      
        default:
            return state;
	}
}