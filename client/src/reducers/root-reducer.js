import { combineReducers } from 'redux';
import ItemReducer from './item-reducer';
//import UserReducer from './user-reducer';

export default combineReducers(
	{
		ItemReducer: ItemReducer
		//auth: UserReducer
	}
);