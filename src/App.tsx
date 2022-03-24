import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import { routes } from './components/Routes/Routes';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          {routes.map((item, index) =>
            <Route key={index} path={item.path} element={item.element} />
          )}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
