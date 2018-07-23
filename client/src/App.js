import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import { Provider } from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return ( //provider provide a way to share states between components
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <ShoppingList />
          <h1>Hello</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
