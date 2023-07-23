import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import { useTheme } from "../Context/ThemeContext";

const MainLayout = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { isDark } = useTheme();

  return (
    <>
      {/* Dashboard Layout */}
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />

      {/* Dashboard Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform border-r  lg:translate-x-0 ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } ${
          isDark ? "bg-darkBg border-deepDarkBg" : "bg-white border-gray-200"
        }`}
      >
        <div
          className={`h-full px-3 pb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-primary/70 scrollbar-track-gray-100 ${
            isDark ? "bg-darkBg" : "bg-white"
          }`}
        >
          <Sidebar />
        </div>
      </aside>

      {/* Dashboard Content */}
      {/*   */}
      <div className="relative lg:pl-[293px] pl-3 pt-32 lg:pr-9 pr-3 pb-12">
        <div
          className={`h-[320px] bg-secondary absolute top-0 left-0 w-full z-0`}
        ></div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
