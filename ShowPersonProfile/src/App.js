import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ShowPersonProfile from './components/ShowPersonProfile';

function App() {
  return (
    <Provider store={store}>
      <ShowPersonProfile />
    </Provider>
  );
}

export default App;
