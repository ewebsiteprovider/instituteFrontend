import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmitLogin = (e) => {
        e.preventDefault();

        if (email === "") return alert("Enter your email");
        if (password === "") return alert("Enter your password");
        console.log('Form submitted:', { email, password });

        setEmail('');
        setPassword('');
    };

    const handleShowPassword = (e) => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
    }

    return (
        <div className=''>

            <div className='w-[300px] sm:w-[500px] md:w-[650px] py-10 rounded-xl bg-black bg-opacity-80'>

                <div className='mb-10 text-white text-[30px] text-center font-bold'>Login Form</div>

                <form className="flex flex-col items-center justify-center space-y-5" onSubmit={handleSubmitLogin}>

                    <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                        <label className='text-white'>Email <span className='text-red-500'>*</span></label>
                        <input className="px-2 sm:px-5 py-1 sm:py-2 text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type="email" value={email} onChange={handleEmailChange} placeholder='Your Email' required />
                    </div>

                    <div className="flex flex-col space-y-2 w-[250px] sm:w-[400px] md:w-[600px]">
                        <label className='text-white'>Password <span className='text-red-500'>*</span></label>
                        <div className='pr-2 w-full flex items-center bg-white rounded-lg sm:rounded-xl'>
                            <input className="px-2 sm:px-5 py-1 sm:py-2 w-full text-black text-md rounded-lg sm:rounded-xl outline-0 placeholder-gray-400 placeholder:italic placeholder:text-sm" type={showPassword ? "text" : "password"} id="password" value={password} onChange={handlePasswordChange} placeholder='Your Password' required />
                            {showPassword ? <VisibilityOffIcon className='cursor-pointer' onClick={handleShowPassword}/> : <VisibilityIcon className='cursor-pointer' onClick={handleShowPassword}/>}
                        </div>
                    </div>

                    <button type='submit' className='p-2 text-black rounded-lg text-lg hover:scale-105 duration-300' style={{ color: 'white', fontWeight: '500', backgroundColor: 'rgba(255, 0, 0, 1)', }}>
                        Login
                    </button>

                    <div className='flex space-x-2'>
                        <div className='text-white'>Don't have an account?</div>
                        <Link to="/register">
                            <div className='text-yellow-400 cursor-pointer hover:text-[red]'>Register now</div>
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default LoginForm;