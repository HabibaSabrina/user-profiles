import React from 'react';
import { Link } from 'react-router-dom';
 
const Users = ({user}) => {
    const{id, name, email, image} = user
   
    return (
        <div className='mx-auto bg-white hover:bg-slate-50 mb-5 border-2 border-blue-900 w-96'>
            <div className='bg-blue-900 p-10'>
            <img className='w-32 rounded-full mx-auto border-double border-8 border-white' src={image} alt="" />
            </div>
            <div className='text-center'>
            <p className='text-2xl text-blue-900 font-semibold my-3'>{name}</p>
            <p className=' font-semibold mb-5 text-gray-700'>{email}</p>
            </div>
            <div className='text-center my-10'>
            
            <Link to={`/user/${id}`}><button className='bg-blue-900 text-white font-semibold text-xl p-5 rounded-xl border-2 border-white px-10 hover:text-blue-900 hover:bg-slate-300 hover:border-blue-900'>Details</button></Link>
            
            </div>
        </div>
    );
};

export default Users;