import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/items';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import Navigation from './components/Navigation';
import Shop from './components/Shop';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(() => {
//   console.log(store.getState());
// })

function App() {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <Navigation />
          <Shop />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
