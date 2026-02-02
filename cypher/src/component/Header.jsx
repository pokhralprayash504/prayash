import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const menubar = [
  {
    id: 1,
    link: "/",
    level: "Home",
  },
  {
    id: 2,
    link: "/shop",
    level: "Shop",
  },
  {
    id: 5,
    link: "/About",
    level: "About",
  },
  {
    id: 4,
    link: "/Blog",
    level: "Blogs",
  },

  {
    id: 3,

    level: "Quick Links",
  },
];
const QuickLinks = [
  {
    id: 1,
    name: "Weekly Trending",
    link: "Weekly-Trending",
  },
  {
    id: 2,
    name: "Monthly Trending",
    link: "Monthly-Trending",
  },
  {
    id: 3,
    name: "Yearly Trending",
    Link: "Yearly-Trending",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between px-11 pt-5 items-center">
      <div className="flex gap-11 items-center">
        <Link to="/">
          <h1 className="text-3xl text-red-500 font-semibold">ESHOP</h1>
        </Link>
        {menubar.map((i) => (
          <ul className="hidden sm:block group relative">
            <li className="cursor-pointer hover:text-red-600 font-semibold">
              <Link to={i.link}>{i.level}</Link>
            </li>
            {i.level === "Quick Links" && (
              <div className="hidden group-hover:block absolute">
                {QuickLinks.map((i) => (
                  <ul className="bg-gray-100 p-3.5">
                    <li className="whitespace-nowrap">
                      <Link to={i.link}>{i.name}</Link>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </ul>
        ))}
      </div>

      <div className="flex gap-10 items-center">
        <div className="relative group hidden sm:block">
          <input
            type="text"
            placeholder="Search Here...."
            className="w-0 group-hover:w-75 group-hover:border group-hover:border-black rounded-2xl transition-all duration-300 px-3 py-1 focus:outline-gray-500"
          />
          <IoSearchSharp
            size={18}
            className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600"
          />
        </div>
        <FaShoppingCart size={22} className="text-gray-600" />
      </div>
    </div>
  );
};

export default Header;
