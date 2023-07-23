import { AiFillSetting } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import SideBarListItem from "../../Shared/SidebarListItem/SidebarListItem";
import DropdownListItem from "../../Shared/DropdownListItem/DropdownListItem";
import { useTheme } from "../../Context/ThemeContext";
// import { BiUserPlus } from "react-icons/bi";
// import { FaBookOpen } from "react-icons/fa";
import DashboardIcon from "../../assets/icon/dashboard.png";
import LanguageIcon from "../../assets/icon/Language.png";
import { useOpenSetting } from "../../Context/OpenSettingContext";

const Sidebar = () => {
    const { openSetting, setOpenSetting } = useOpenSetting();
    const activePathName = useLocation().pathname;
    const { isDark } = useTheme();

    return (
        <ul className="space-y-2 font-medium mt-5">
            {/* dashboard */}
            <SideBarListItem
                name={"Dashboard"}
                pathName={"/dashboard"}
                activePathName={activePathName}
                icon={
                    <span className="w-[20px] h-[20px] ml-1">
                        <img
                            className="w-full h-full"
                            src={DashboardIcon}
                            alt="Dashboard"
                        />
                    </span>
                }
            />
            {/* Language */}
            <SideBarListItem
                name={"Language"}
                pathName={"/dashboard/language"}
                activePathName={activePathName}
                style={"ml-2"}
                icon={
                    <span className="w-[29px] h-[29px]">
                        <img
                            className="w-full h-full"
                            src={LanguageIcon}
                            alt="LanguageIcon"
                        />
                    </span>
                }
            />

            {/* setting */}
            <DropdownListItem
                openSetting={openSetting}
                activePathName={activePathName}
                setOpenSetting={setOpenSetting}
                name={"Setting"}
                icon={
                    <AiFillSetting
                        className={`w-7 h-7 ${
                            activePathName === "/dashboard/setting"
                                ? "text-primary"
                                : "text-primary"
                        }  transition duration-75  group-hover:text-primary`}
                    />
                }
            >
                <>
                   
                    {/* add language */}
                    <Link
                        to={"/dashboard/add-language"}
                        className={`flex items-center group ml-3 p-2  rounded-lg group text-primary  ${
                            activePathName === `/dashboard/add-language` &&
                            !isDark &&
                            "bg-gray-100"
                        } ${
                            isDark
                                ? "bg-darkBg hover:bg-deepDarkBg"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <span className={`ml-3 group-hover:text-primary `}>
                            Add Language
                        </span>
                    </Link>
                </>
            </DropdownListItem>
        </ul>
    );
};

export default Sidebar;
