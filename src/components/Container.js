import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import Outreach from './pages/Outreach';
import Header from './Header';

export default function Container() {
    return (
        <Router >
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
}