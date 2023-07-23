import { useTheme } from "../../Context/ThemeContext";
import NavbarLeft from "./NavbarLeft/NavbarLeft";
import NavbarRight from "./NavbarRight/NavbarRight";

const Navbar = ({ openSidebar, setOpenSidebar }) => {
  const { isDark } = useTheme();
  return (
    <nav
      className={`w-full fixed top-0 z-50  border-b  ${
        isDark ? "border-deepDarkBg bg-darkBg" : "bg-white border-gray-200"
      }`}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Navbar Left */}
          <NavbarLeft
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />

          {/* Navbar Right */}
          <NavbarRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
