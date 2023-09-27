import React, { useId, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./style.css"
import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const UserDetails = () => {
    const userData = useLoaderData();
    const userId = useParams()
    const theData = userData.filter(user => user.id == userId.id)
    const {name, email, image, address, phone, birthday, bio} = theData[0]
    return (
        <div className='user-bg md:p-32 md:px-64'>
            <Link to="/"><button className='font-semibold bg-blue-900 rounded-full px-3 hover:bg-slate-600 text-white text-xl p-1 absolute md:right-60 md:top-28 top-5 right-5'>X</button></Link>
            <div className='md:grid grid-cols-3 r gap-20 bg-transparent shadow-2xl rounded-xl p-10'>
                <div className='text-center md:my-10 md:border-r-2  md:pr-10'>
                <img className='w-96 mt-5 mx-auto rounded-full border-4 border-blue-900' src={image} alt="" />
                <p className='text-2xl font-semibold text-blue-900 my-5'>{name}</p>
                <div className='flex gap-5 justify-center text-4xl text-white mb-5'>
                    <FaFacebook className='border-2 rounded-full p-1 bg-blue-900'></FaFacebook>
                    <FaTwitter className='border-2 rounded-full p-1 bg-blue-900'></FaTwitter>
                    <FaInstagram className='border-2 rounded-full p-1 bg-blue-900'></FaInstagram>
                </div>
                </div>
                <div className='col-span-2 text-gray-600'>
                    <h1 className='text-3xl font-semibold text-blue-900 mb-10 text-center'>Profile Details</h1>
                    <table className='text-xl font-semibold mx-auto'>
                        <tr>
                            <td className='pr-5 text-blue-900'>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr >
                            <td className='py-10 text-blue-900'>Bio:</td>
                            <td>{bio}</td>
                        </tr>
                        <tr>
                            <td className='pr-5 text-blue-900'>Mobile:</td>
                            <td>{phone}</td>
                        </tr>
                        <tr>
                            <td className='py-5 text-blue-900'>Email:</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td className='pr-5 text-blue-900'>Birthday:</td>
                            <td>{birthday}</td>
                        </tr>
                        <tr>
                            <td className='py-5 text-blue-900'>Address:</td>
                            <td>{address}</td>
                        </tr>
                    </table>

                </div>
            </div>
            
        </div>
    );
};

export default UserDetails;