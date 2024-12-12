import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar'; 
import Pagination from '../components/Pagination';

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Publicaciones</h1>
            {/* Aquí se mostrará la barra de búsqueda más adelante */}
            <PostList posts={posts} />
        </div>
    );
};

export default HomePage;