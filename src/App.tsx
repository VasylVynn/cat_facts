import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Login from './pages/LogIn/Login';
import Facts from './pages/Facts/facts';
import FavFacts from './pages/FavFacts/FavFacts'
import Registration from './pages/Registration/Registration'





const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/fav_facts" element={<FavFacts />} />
        </Routes>
      </Router>


    </Provider>
  );
}




export default App;
