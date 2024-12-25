import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center py-3'>
            <img src={logo} alt="" className=''/>
            <p className='text-gray-500 text-2xl my-3'>Journalism Without Fear or Favour</p>
            </div>
        </div>
    );
};

export default Header;