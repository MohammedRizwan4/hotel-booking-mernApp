import React from 'react';
import {
    BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/hotels" element={<List />}></Route>
                <Route path="/hotel/:id" element={<Hotel />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
