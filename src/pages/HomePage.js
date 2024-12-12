import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar'; 
import Pagination from '../components/Pagination';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    // SearchBar
    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Publicaciones</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PostList posts={filteredPosts} /> 
        </div>
    );
};

export default HomePage;