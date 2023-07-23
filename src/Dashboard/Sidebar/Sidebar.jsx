import { AiFillSetting } from "react-icons/ai";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiEntryDoor } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import SideBarListItem from "../../Shared/SidebarListItem/SidebarListItem";
import DropdownListItem from "../../Shared/DropdownListItem/DropdownListItem";
import { useTheme } from "../../Context/ThemeContext";

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
                    <MdOutlineDashboardCustomize className="w-6 h-6"/>
                   
                }
            />
            {/* Lead Entry */}
            <SideBarListItem
                name={"Lead Entry"}
                pathName={"/dashboard/lead-entry"}
                activePathName={activePathName}
                style={"ml-2"}
                icon={
                    <GiEntryDoor className="w-6 h-6 text-primary"/>
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
                    {/* add lead entry */}
                    <Link
                        to={"/dashboard/add-lead-entry"}
                        className={`flex items-center group ml-3 p-2  rounded-lg group text-primary  ${
                            activePathName === `/dashboard/add-lead-entry` &&
                            !isDark &&
                            "bg-gray-100"
                        } ${
                            isDark
                                ? "bg-darkBg hover:bg-deepDarkBg"
                                : "hover:bg-gray-100"
                        }`}
                    >
                        <span className={`ml-3 group-hover:text-primary `}>
                            Add Lead Entry
                        </span>
                    </Link>
                </>
            </DropdownListItem>
        </ul>
    );
};

export default Sidebar;
