import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => {
    return (
        <ul className='space-y-8'>
            {posts.map(post => (
                <li key={post.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                    <Link to={`/posts/${post.id}`}>
                        <h2 className='font-bold'>{post.title}</h2>
                    </Link>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    );
};

export default PostList;