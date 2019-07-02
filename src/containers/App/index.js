import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import renderRoutes from '../../routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {renderRoutes()}
      </Provider>
    );
  }
}

export default App;
