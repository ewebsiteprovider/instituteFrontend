import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './navLogo2.png';
import whatsapp from './whatsappLogo.png';
// import './Navbar.css';

const NavBar = () => {

  const navigate = useNavigate();

  const [status, setStatus] = useState(false);

  const handleOnClick = () => {
    (status ? setStatus(false) : setStatus(true));
    console.log(status);
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Foundation", path: "/foundation" },
    { name: "JEE", path: "/jee" },
    { name: "NEET", path: "/neet" },
    { name: "Result", path: "/result" },
    { name: "Enquiry Now", path: "/enquiry" },
  ];

  return (

    <div className="">

      <div className="flex items-center justify-evenly">

        <div className="w-[200px] flex items-center justify-between hidden lg:flex">
          <FacebookRoundedIcon sx={{ fontSize: '40px', color: '#3b5998' }} className="cursor-pointer hover:text-black" />
          <TwitterIcon sx={{ fontSize: '40px', color: '#00acee' }} className="cursor-pointer hover:text-black" />
          <LinkedInIcon sx={{ fontSize: '40px', color: ' #0A66C2' }} className="cursor-pointer hover:text-black" />
        </div>

        <div className="flex items-center space-x-5 md:space-x-10">
          <div className="w-[60px] md:w-[40px lg:w-[80px] cursor-pointer animate-pulse" title="Chat with us">
            <ReactWhatsapp number="+917370884033" message="Hi.....">
              <img src={whatsapp} alt="" />
            </ReactWhatsapp>
          </div>

          <div className="w-[90px] md:w-[110px] lg:w-[140px] cursor-pointer" title="Scholarship test" onClick={()=>navigate('/scholarship')}>
            <img src="https://www.jupitersmriti.com/images/jupiter__image/sm____jupiter_img-2.png" alt="" />
          </div>

        </div>

        <div className="flex items-center">
          <Link to="/login">
            <button className="px-2 md:px-3 py-1 text-sm md:text-xl bg-[red] bg-opacity-80 rounded-md lg:rounded-xl text-white font-bold hover:bg-red-600 hover:scale-105 duration-200">Login</button>
          </Link>
        </div>

      </div>

      <nav className="bg-black text-white flex justify-between lg:justify-between px-[32px] w-[100%] h-[70px] lg;h-[100px] items-center sm:overflow-hidden">

        <div className="w-[25%] xl:w-[35%] 2xl:w-[40%] flex justify-center">
            <img src={logo} alt="" className="h-[40px] md:h-[60px] rounded-full cursor-pointer" onClick={()=>navigate('/')} />
        </div>

        <div className="2xl:mr-64">
          <div className="relative lg:hidden">

            <div className='cursor-pointer ' onClick={handleOnClick}>
              <MenuIcon sx={{ fontSize: '33px' }} />
            </div>

            {
              status ?
                (<ul className='mt-3 px-2 flex flex-col items-center justify-center absolute z-10 -right-4 w-[300px] bg-black opacity-90 rounded-md'>
                  <NavLink to="/" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Home</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/scholarship" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Scholarship</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/foundation" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Foundation</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/jee" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>JEE</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/neet" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>NEET</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/result" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Result</li>
                  </NavLink>
                  <div className='h-[1px] w-full bg-white'></div>
                  <NavLink to="/enquiry" className='mx-8 py-3 my-3 w-full text-center aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Enquiry Now</li>
                  </NavLink>
                </ul>) : (<div></div>)
            }
          </div>


          <ul className="flex items-center lg:space-x-3 xl:space-x-5 hidden lg:inline">

            {navItems.map((item, index) => (
              <NavLink className="p-[16px] hover:text-yellow-400 duration-300 aria-[current=page]:text-yellow-400 aria-[current=page]:font-bold" to={item.path} key={index}>
                {item.name}
              </NavLink>
            ))}

          </ul>

        </div>

      </nav>

    </div>

  );
};
export default NavBar;
