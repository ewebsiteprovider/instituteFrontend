import { Link } from "react-router-dom";
import logo from './nav.png'
const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Foundation", path: "/foundation" },
    { name: "Scholarship", path: "/scholarship" },
    { name: "Result", path: "/jee" },
  ];
  return (
    <nav className="bg-[rgb(253,_224,_71,_0.6)] flex justify-between px-[32px] w-[100%] h-[60px] items-center">
      <img src={logo} alt="" className="h-[60%] bg-[#fff] rounded-full"/>
      <ul className=" flex items-center">
        {navItems.map((item, index) => (
          <Link className="p-[16px]" to={item.path} key={index}>
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
