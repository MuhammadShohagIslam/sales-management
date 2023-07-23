import { useLocation } from "react-router-dom";

const DropdownListItem = ({
    name,
    icon,
    children,
    openSetting,
    setOpenSetting,
}) => {
    const activePathName = useLocation().pathname;

    const path = [
        "/dashboard/add-surah-info",
        "/dashboard/add-language",
        "/dashboard/add-musaf-variant",
        "/dashboard/add-musaf-background",
        "/dashboard/add-surah-page",
        "/dashboard/add-surah-page",
        "/dashboard/add-surah-para",
        "/dashboard/add-surah-hizb",
        "/dashboard/add-surah-ayah",
    ];

    const isActive = path.includes(activePathName);

    return (
        <li>
            <button
                onClick={() => {
                    setOpenSetting(!openSetting)
                }}
                type="button"
                className={`flex items-center w-full p-2 ml-1 text-base  rounded-lg group text-primary ${
                    isActive ? "bg-gray-100" : ""
                } hover:bg-gray-100 `}
            >
                {icon}
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    {name}
                </span>
                <svg
                    className="w-6 h-6 group-hover:text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </button>
            <ul className={`${!openSetting ? "hidden" : ""} py-2 space-y-2 `}>
                {children}
            </ul>
        </li>
    );
};

export default DropdownListItem;
