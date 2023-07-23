import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeContext";
import { useOpenSetting } from "../../Context/OpenSettingContext";

const SideBarListItem = ({ pathName, name, icon, activePathName, style }) => {
    const { isDark } = useTheme();
    const { setOpenSetting } = useOpenSetting();
    return (
        <li className="group" onClick={() => setOpenSetting(false)}>
            <Link
                to={pathName}
                className={`flex items-center p-2 rounded-lg ${
                    activePathName === pathName && "bg-deepDarkBg"
                }  ${activePathName === pathName && !isDark && "bg-gray-100"} ${
                    isDark
                        ? "bg-darkBg hover:bg-deepDarkBg"
                        : "hover:bg-gray-100"
                }`}
            >
                {icon}
                <span
                    className={`${
                        style ? style : "ml-3"
                    } group-hover:text-primary  text-primary `}
                >
                    {name}
                </span>
            </Link>
        </li>
    );
};

export default SideBarListItem;
