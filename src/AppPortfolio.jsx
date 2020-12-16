import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { store } from './store/store';


function AppPortfolio() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default AppPortfolio;
