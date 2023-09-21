import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/styles/root.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Outreach from './pages/Outreach';
import Header from './Header';
function App() {

  return (
    <div className="App">
      (
        <Router basename="/tamar-blanks">
            <Header/>
            <Routes>
                <Route
                exact path="/"
                element={<Home />}
                />
                <Route
                path="/Research"
                element={<Research />}
                />
                 <Route
                path="/Teaching"
                element={<Teaching />}
                />
                 <Route
                path="/Outreach"
                element={<Outreach />}
                />
            </Routes>
        </Router>
    )
    </div>
  );
}

export default App;
