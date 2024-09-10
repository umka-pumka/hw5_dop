import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, []);

    console.log(users);
    return (
        <div>
            <div>
                {users.map(user => (
                    <h1 key={user.id}> <Link to={`${user.id}`}>{user.username}</Link></h1>
                ))}
                
            </div>
        </div>
    );
}

export default Home;
