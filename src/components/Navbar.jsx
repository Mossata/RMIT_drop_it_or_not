import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
          <p className='text-white text-[18px] font-bold cursor-pointer'> Nathaniel Shelton</p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
            <li 
              key="posts" 
              className={`${
                active === "Posts"
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Posts")}
            >
              <a href="#posts">Posts</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar