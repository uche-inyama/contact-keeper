import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
