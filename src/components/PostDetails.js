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
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <h3>Comentarios:</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong>: {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetails;