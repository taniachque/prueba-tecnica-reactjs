import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetails from './components/PostDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:id" element={<PostDetails />} />
            </Routes>
        </Router>
    );
};

export default App;