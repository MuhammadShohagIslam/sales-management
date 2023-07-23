import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/logo.png";
// import { BiSearch } from "react-icons/bi";
import { useTheme } from "../../../Context/ThemeContext";

const NavbarLeft = ({ openSidebar, setOpenSidebar }) => {
  const { isDark } = useTheme();
  return (
    <>
      <div className="flex items-center justify-start">
        <button
          onClick={() => setOpenSidebar(!openSidebar)}
          type="button"
          className={`inline-flex items-center p-2 text-sm text-primary rounded-lg lg:hidden  focus:outline-none focus:ring-2 focus:ring-primary ${
            isDark ? "hover:bg-deepDarkBg" : "hover:bg-white"
          }`}
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <Link to="/" className="flex ml-2 md:mr-24">
          <img src={Logo} className="h-14 mr-3" alt="Amina Logo" />
        </Link>
      </div>
      <div className="lg:flex items-start hidden">
        {/* <div>
          <form action="#" method="GET" className="">
            <label htmlFor="top-bar-search" className="sr-only">
              Search
            </label>
            <div
              className={`relative mt-1 w-80 ${
                isDark
                  ? "text-primary placeholder:text-primary"
                  : "text-gray-900 placeholder:text-gray-700"
              }`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span>
                  <BiSearch />
                </span>
              </div>
              <input
                type="text"
                name="search-dashboard"
                id="top-bar-search"
                className={`bg-transparent shadow-lg border-gray-300  sm:text-sm rounded-lg  block w-full pl-10 p-2.5 focus:outline-1 focus:outline-secondary focus:outline-none ${
                  isDark
                    ? "text-primary placeholder:text-primary focus:outline-secondary focus:outline-none"
                    : "text-gray-900 placeholder:text-gray-700 focus:outline-secondary"
                }`}
                placeholder="Search"
              />
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
};

export default NavbarLeft;
