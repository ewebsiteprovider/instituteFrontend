import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();

    if (name === "") return alert("Enter your name");
    if (email === "") return alert("Enter your email");
    if (mobile === "") return alert("Enter your mobile");
    if (password === "") return alert("Enter your password");
    if (cpassword === "") return alert("Enter your confirm password");

    setName('');
    setEmail('');
    setMobile('');
    setPassword('');
    setCPassword('');
  };

  return (
    <div>
      
        <div className='my-10 xl:my-10 w-[300px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-black bg-opacity-80'>

          <div className='mb-10 text-white text-[30px] text-center font-bold'>Registration Form</div>

          <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmitRegistration}>

            <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
              <label className='text-white'>Full Name <span className='text-red-500'>*</span></label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="text" value={name} onChange={handleNameChange} placeholder='Enter Your Name' required />
            </div>

            <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
              <label className='text-white'>Email <span className='text-red-500'>*</span></label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="email" value={email} onChange={handleEmailChange} placeholder='Your Email' required />
            </div>

            <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
              <label className='text-white'>Mobile <span className='text-red-500'>*</span></label>
            <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="tel" pattern="[7-9]{1}[0-9]{9}" value={mobile} onChange={handleMobileChange} placeholder='Your Mobile Number' required />
            </div>

            <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
              <label className='text-white'>Password <span className='text-red-500'>*</span></label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="password" value={password} onChange={handlePasswordChange} placeholder='Your Password' required />
            </div>

            <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
              <label className='text-white'>Confirm Password <span className='text-red-500'>*</span></label>
              <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="password" value={cpassword} onChange={handleCPasswordChange} placeholder='Your Confirm Password' required />
            </div>

          <button type='submit' className='p-2 text-black rounded-lg text-lg hover:scale-105 duration-300' style={{ color: 'white', fontWeight: '500', backgroundColor: 'rgba(255, 0, 0, 1)', }}>
              Register
            </button>

            <div className='flex space-x-2'>
              <div className='text-white'>Already have an account?</div>
            <Link to='/login'>
              <div className='text-yellow-400 cursor-pointer hover:text-[red]'>Login</div>
            </Link>
            </div>

          </form>
        </div>

    </div>
  );
};

export default RegistrationForm;