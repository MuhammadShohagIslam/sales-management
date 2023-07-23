import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../../../Context/ThemeContext";
import { useAuth } from "../../../../Hooks/useAuth";
import { useDispatch } from "react-redux";
import { addUser } from "../../../../store/features/user/userSlice";

const Profile = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const { isDark } = useTheme();
    const authData = useAuth();
    const dispatch = useDispatch();
    const userInfo = authData?.userInfo;

    const handleLogOut = () => {
        dispatch(addUser({}));
    };
    return (
        <>
            {userInfo?.email ? (
                <div className="flex items-center">
                    <div>
                        <button
                            type="button"
                            className={`w-[46px] h-[46px] flex border-4 rounded-full ${
                                openProfile
                                    ? "drop-shadow-2xl  border-primary"
                                    : "text-gray-800"
                            }  drop-shadow-lg hover:drop-shadow-2xl transition-all relative ${
                                isDark ? "bg-primary border-deepDarkBg" : ""
                            }`}
                            onClick={() => setOpenProfile(!openProfile)}
                        >
                            <span className="sr-only">Open user menu</span>
                            <FaUser  className='w-full h-full  rounded-full'/>
                            {/* <img
                                className="w-full h-full rounded-full"
                                src={UserImage}
                                alt="user photo"
                            /> */}
                        </button>
                    </div>
                    {openProfile && (
                        <div
                            className={`z-50 absolute right-1 top-[80%] my-4 text-base list-none divide-y divide-gray-100 rounded shadow min-w-[150px] text-primary ${
                                isDark ? "bg-darkBg" : "bg-white"
                            }`}
                        >
                            <div
                                className="px-4 py-3 grid grid-cols-1 gap-3 font-semibold"
                                role="none"
                            >
                                <button
                                    onClick={handleLogOut}
                                    className={`text-sm pt-2 flex items-center gap-1 text-start ${
                                        isDark && "border-deepDarkBg"
                                    }`}
                                >
                                    <FiLogOut className="text-lg mt-[2px]" />{" "}
                                    <span>Log Out</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    to="/"
                    className={`px-5 py-2 border rounded-sm ${
                        isDark
                            ? " border-primary border-opacity-40 text-primary hover:bg-primary hover:text-white transition-all "
                            : "bg-white"
                    }`}
                >
                    Login
                </Link>
            )}
        </>
    );
};

export default Profile;
