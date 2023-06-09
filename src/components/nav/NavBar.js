import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import logo from './navLogo.jpeg';
import logo from './navLogo2.png';
// import logo from './MicrosoftTeams-image.png';

const NavBar = () => {

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

    <div>

      <div className="flex items-center justify-evenly">

        <div className="w-[200px] flex items-center justify-evenly hidden lg:flex">
          <FacebookRoundedIcon sx={{ fontSize: '40px', color:'#3b5998' }} className="cursor-pointer hover:text-black" />
          <TwitterIcon sx={{ fontSize: '40px', color:'#00acee' }} className="cursor-pointer hover:text-black" />
          <LinkedInIcon sx={{ fontSize: '40px', color:' #0A66C2' }} className="cursor-pointer hover:text-black" />
        </div>

        <div className="flex items-center space-x-5 md:space-x-10">
          <div className="w-[130px] md:w-[150px] lg:w-[180px] cursor-pointer">
            <img src="https://www.ts.mentorsedu.com/ads_banner/banner_1622486075_1767.gif" alt="" />
          </div>

          <div className="w-[130px] md:w-[150px] lg:w-[180px] cursor-pointer">
            <img src="https://www.ts.mentorsedu.com/ads_banner/banner_1622473322_1502.png" alt="" />
          </div>
        </div>

        <div className="flex items-center">
          <Link to="/login">
            <button className="px-2 md:px-3 py-1 text-sm md:text-xl bg-[red] bg-opacity-80 rounded-md lg:rounded-xl text-white font-bold hover:text-yellow-200 hover:bg-red-600 duration-200">Login</button>
          </Link>
        </div>

      </div>

      <nav className="bg-black text-white flex justify-between lg:justify-evenly px-[32px] w-[100%] h-[70px] lg;h-[100px] items-center sm:overflow-hidden">

        <img src={logo} alt="" className="h-[40px] md:h-[60px] rounded-full" />

        <div>
          <div className="relative lg:hidden">

            <div className='cursor-pointer ' onClick={handleOnClick}>
              <MenuIcon sx={{fontSize:'33px'}} />
            </div>

            {
              status ?
                (<ul className='mt-3 px-2 flex flex-col items-center justify-center absolute z-10 -right-4 w-[300px] bg-black opacity-90 text-yellow-300 rounded-md'>
                  <Link to="/" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Home</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/scholarship" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Scholarship</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/foundation" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Foundation</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/jee" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>JEE</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/neet" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>NEET</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/result" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Result</li>
                  </Link>
                  <div className='h-[1px] w-full bg-white'></div>
                  <Link to="/enquiry" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                    <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Enquiry Now</li>
                  </Link>
                </ul>) : (<div></div>)
            }
          </div>


          <ul className="flex items-center lg:space-x-3 xl:space-x-5 hidden lg:inline">

            {navItems.map((item, index) => (
              <Link className="p-[16px] hover:text-yellow-400 duration-300" to={item.path} key={index}>
                {item.name}
              </Link>
            ))}

          </ul>

        </div>

      </nav>

    </div>

  );
};
export default NavBar;
