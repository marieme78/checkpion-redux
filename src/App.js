import React from 'react';
import { Provider } from 'react-redux';
import Store from './component/Store'; // Assurez-vous que le chemin est correct

import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './component/Task';

const App = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <Task />
      </div>
    </Provider>
  );
};

export default App;
