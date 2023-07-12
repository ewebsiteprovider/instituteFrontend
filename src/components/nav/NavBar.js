import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import logo from './navLogo.jpeg';
// import logo from './MicrosoftTeams-image.png';

const NavBar = () => {

  const [status, setStatus] = useState(false);

  const handleOnClick = () => {
    (status ? setStatus(false) : setStatus(true));
    console.log(status);
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Foundation", path: "/foundation" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "JEE", path: "/jee" },
    { name: "NEET", path: "/neet" },
    { name: "Result", path: "/result" },
    { name: "Enquiry Now", path: "/enquiry" },
  ];

  return (

    <nav className="bg-black text-white flex justify-between px-[32px] w-[100%] h-[100px] items-center sm:overflow-hidden">

      <img src={logo} alt="" className="h-[40px] md:h-[60px] rounded-full ml-40" />

      <div>
        <div className="relative lg:hidden">

          <div className='cursor-pointer ' onClick={handleOnClick}>
            <MenuIcon />
          </div>

          {
            status ?
              (<ul className='mt-3 px-2 flex flex-col items-center justify-center absolute z-10 -right-4 w-[300px] bg-black opacity-90 text-yellow-300 rounded-md'>
                <Link to="/" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                  <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Home</li>
                </Link>
                <div className='h-[1px] w-full bg-white'></div>
                <Link to="/foundation" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                  <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Foundation</li>
                </Link>
                <div className='h-[1px] w-full bg-white'></div>
                <Link to="/scholarship" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
                  <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Scholarship</li>
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

        <ul className=" flex flex-row items-center lg:space-x-3 xl:space-x-5 hidden lg:inline">
          {navItems.map((item, index) => (
            <Link className="p-[16px]" to={item.path} key={index}>
              {item.name}
            </Link>
          ))}


          {/* <Link to="/" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Home</li>
          </Link>
          <div className='h-[1px] w-full bg-white'></div>
          <Link to="/foundation" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Foundation</li>
          </Link>
          <div className='h-[1px] w-full bg-white'></div>
          <Link to="/scholarship" className='mx-8 py-3 my-3 w-full text-center' onClick={() => setStatus(false)}>
            <li className='font-bold cursor-pointer hover:scale-125 hover:duration-300'>Scholarship</li>
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
          </Link> */}
          

        </ul>

      </div>

    </nav>

  );
};
export default NavBar;
