import React, { useState } from 'react';
// import './EnquiryForm.css';

const EnquiryForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [option, setOption] = useState('');
    const [query, setQuery] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleOptionChange = (e) => {
        setOption(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', { name, email, mobile, city, option, query });

        setName('');
        setEmail('');
        setMobile('');
        setCity('');
        setOption('');
        setQuery('');
    };

    return (
        <div className='w-[300px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-black bg-opacity-50'>
            <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmit}>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>Full Name <span className='text-red-500'>*</span></label>
                    <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="text" value={name} onChange={handleNameChange} placeholder='Enter Your Name' required />
                </div>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>Email <span className='text-red-500'>*</span></label>
                    <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="email" value={email} onChange={handleEmailChange} placeholder='Your Email' required />
                </div>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>Mobile Number <span className='text-red-500'>*</span></label>
                    <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="tel" value={mobile} onChange={handleMobileChange} placeholder='Your Mobile number' required />
                </div>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>City <span className='text-red-500'>*</span></label>
                    <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="text" value={city} onChange={handleCityChange} placeholder='Your City' required />
                </div>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>Category <span className='text-red-500'>*</span></label>
                    <select className='px-2 sm:px-4 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0' value={option} onChange={handleOptionChange} required>
                        <option className='' value="">Select an option</option>
                        <option className='' value="foundation">Foundation</option>
                        <option className='' value="boards">Boards</option>
                        <option className='' value="jee">JEE</option>
                        <option className='' value="neet">NEET</option>
                        <option className='' value="target">Target</option>
                    </select>
                </div>

                <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                    <label className='text-white'>Query <span className='text-red-500'>*</span></label>
                    <textarea className="px-2 sm:px-4 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm resize-none" value={query} onChange={handleQueryChange} placeholder='Your Message' rows="4" cols="50" fixed required />
                </div>

                <button type='submit' className='p-2 text-black rounded-lg hover:scale-105 duration-300' style={{ color: 'white', fontWeight:'500', backgroundColor:'rgba(39, 193, 89, 0.8)', marginRight:'250px', }}>
                    Submit
                </button>

            </form>
        </div>
    );
};

export default EnquiryForm;