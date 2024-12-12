import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
    const { id } = useParams(); // Obtener ID de publicación de URL
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            setPost(response.data);
        };

        const fetchComments = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            setComments(response.data);
        };

        fetchPost();
        fetchComments();
    }, [id]);

    return (
        <div className="max-w-4xl mx-auto p-6 m-4 bg-custom-lightBlue shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">{post.title}</h2>
            <p className="text-gray-800 mb-6">{post.body}</p>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Comentarios:</h3>
            <ul className="space-y-4">
                {comments.map(comment => (
                    <li key={comment.id} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                        <strong className="text-blue-600">{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetails;