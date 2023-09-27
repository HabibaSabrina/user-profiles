// import React, { useEffect, useState } from 'react';
import { FaBeer, FaUser } from 'react-icons/fa';
import Users from './Users/Users';
import { useContext } from 'react';
import { UserContext } from '../userProvider/userProvider';
import "./Users/style.css"
const Home = () => {
    const [users] = useContext(UserContext)
    return (
        <div>
            <h1 className='text-3xl font-semibold bg-blue-800 text-white p-5 flex items-center justify-center gap-3'>Profiles <FaUser></FaUser></h1>
            <div className='md:grid user-bg grid-cols-3 gap-20 py-20'>
                {
                    users.map(user => <Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default Home;