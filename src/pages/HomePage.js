import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar'; 
import Pagination from '../components/Pagination';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

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

    // Lógica para paginación
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='max-w-6xl mx-auto p-6 m-2 bg-custom-lightBlue'>
            <h1 className="text-3xl font-bold text-custom-blue text-center p-4">PUBLICACIONES</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {/*<PostList posts={filteredPosts} />     */}
            <PostList posts={currentPosts} />
            <Pagination 
                postsPerPage={postsPerPage} 
                totalPosts={filteredPosts.length} // Total filtrado
                paginate={paginate} 
                currentPage={currentPage} 
            />
        </div>
    );
};

export default HomePage;