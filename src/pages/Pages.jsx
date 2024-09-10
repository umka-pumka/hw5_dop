import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


const Pages = () => {
    const [users, setUsers] = useState([]);
    const userId = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId.id}`)
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, [userId.id]);

    console.log(users);
    return (
        <div>
            <ul>
                <li><h1>{users.name}</h1></li>
                <li><h2>{users.username}</h2></li>
                <li><h2>{users.email}</h2></li>
                <li><h2>{users.phone}</h2></li>
                <li><h2>{users.website}</h2></li>
                
            </ul>

            <Link to='/'>go home</Link>
        </div>
    );
}

export default Pages;
