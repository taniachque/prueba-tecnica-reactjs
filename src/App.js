import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetails from './components/PostDetails';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;