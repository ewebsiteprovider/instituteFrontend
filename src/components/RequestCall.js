import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RequestCall = () => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };


    const handleSubmitCall = (e) => {
        e.preventDefault();

        if (name === "") return alert("Enter your Name");
        if (mobile === "") return alert("Enter your Mobile");

        setName('');
        setMobile('');
    };


    return (
        <div className='fixed bottom-[150px] left-[20px] sm:left-[150px md:left-[200px z-10'>

            <div className='w-[250px] sm:w-[200px] md:w-[350px] py-10 rounded-xl bg-black bg-opacity-90'>

                <div className='mb-10 text-white text-[20px] md:text-[25px] text-center font-bold'>Request a call back</div>

                <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmitCall}>

                    <div className="flex flex-col space-y-2 w-[200px] sm:w-[100px] md:w-[300px]">
                        <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-800 placeholder:italic placeholder:text-sm" type="text" value={name} onChange={handleNameChange} placeholder='Enter your name' required />
                    </div>

                    <div className="flex flex-col space-y-2 w-[200px] sm:w-[100px] md:w-[300px]">
                        <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-800 placeholder:italic placeholder:text-sm" type="text" value={mobile} onChange={handleMobileChange} placeholder='Enter your Mobile' required />
                    </div>

                    <button type='submit' className='p-2 text-black rounded-lg text-sm md:text-lg hover:scale-105 duration-300' style={{ color: 'white', fontWeight: '500', backgroundColor: 'rgba(255, 0, 0, 1)', }}>
                        Submit call request
                    </button>

                </form>
            </div>

        </div>
    );
};

export default RequestCall;