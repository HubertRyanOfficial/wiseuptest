import React from 'react';

// * modules

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

// * utils

import { store, persistor } from "./config/store"
import Routes from "./routes"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Routes />
      </PersistGate>
    </Provider>
  )
};

export default App;
