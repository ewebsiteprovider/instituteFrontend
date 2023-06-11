import { Link } from "react-router-dom"

const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Foundation", path: "/foundation" },
    { name: "Home", path: "/" },
  ];
  return (
    <nav className="bg-[rgba(45,0,0)] flex justify-between px-[32px] w-[100%] h-[60px]">
      <img
        className="h-[60px] p-[8px]"
        src="https://motion.ac.in/website/images/university-logo.png"
        alt=""
      />
      <ul className="text-white flex items-center">
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
