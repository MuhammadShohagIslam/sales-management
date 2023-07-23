import { Tooltip } from "react-tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import SurahPlaceImage from "../../../assets/place/modina.png";
import SurahPlaceImage1 from "../../../assets/place/mocca.png";

const SurahPlace = ({ register, errors }) => {
    const [openSurahPlace, setOpenSurahPlace] = useState(false);
    const [selectSurahPlace, setSelectSurahPlace] = useState(
        <>
            <img
                className="h-6 w-6 rounded-full"
                src={SurahPlaceImage}
                alt="Surah Place Image"
            />
            <span className="mt-[3px] ml-[4px]">Madina</span>
        </>
    );
    console.log(register, errors);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 mt-0">
                <div>
                    <h1 className="flex items-center font-semibold cursor-pointer mb-2">
                        <span className="mr-1">Surah Revealed</span>
                        <span id={"surahPlace"}>
                            <AiOutlineQuestionCircle className="text-black" />
                        </span>
                    </h1>
                    <div className="relative ">
                        <div className="flex">
                            <button
                                className="z-10 flex justify-between items-center min-w-[194px] min-h-[47px] text-sm font-medium text-center text-gray-900 bg-gray-100 border border-primary rounded-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 px-3"
                                onClick={() =>
                                    setOpenSurahPlace(!openSurahPlace)
                                }
                                type="button"
                            >
                                <span className="flex ">
                                    {!selectSurahPlace
                                        ? "Choose Surah Place"
                                        : selectSurahPlace}
                                </span>

                                <svg
                                    className="w-2.5 h-2.5 ml-2.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                        </div>

                        <Tooltip
                            anchorSelect={`#surahPlace`}
                            content={
                                "এখানে আপনি, সূরার স্থানটি (মক্কা/মদিনা) দিবেন!"
                            }
                            place="top-start"
                        />

                        {/* Surah Place dropdown */}
                        {openSurahPlace && (
                            <div className="z-10 absolute left-0 top-11 bg-white divide-y divide-gray-100 rounded-lg shadow w-48 ">
                                <ul
                                    className="py-2 text-sm text-gray-700 "
                                    aria-labelledby="dropdown-button"
                                >
                                    <li className="flex items-center">
                                        <button
                                            onClick={() => {
                                                setSelectSurahPlace(
                                                    <>
                                                        <img
                                                            className="h-6 w-6 rounded-full"
                                                            src={
                                                                SurahPlaceImage1
                                                            }
                                                            alt="Surah Place Image"
                                                        />
                                                        <span className="mt-1 ml-[4px]">
                                                            Mokkah
                                                        </span>
                                                    </>
                                                );
                                                setOpenSurahPlace(
                                                    !openSurahPlace
                                                );
                                            }}
                                            type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                                        >
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src={SurahPlaceImage1}
                                                alt="Surah Place Image"
                                            />
                                            <span className="mt-1 ml-[4px]">
                                                Mokkah
                                            </span>
                                        </button>
                                    </li>
                                    <li className="flex items-center">
                                        <button
                                            onClick={() => {
                                                setSelectSurahPlace(
                                                    <>
                                                        <img
                                                            className="h-6 w-6 rounded-full"
                                                            src={
                                                                SurahPlaceImage
                                                            }
                                                            alt="Surah Place Image"
                                                        />
                                                        <span className="mt-[3px] ml-[4px]">
                                                            Madina
                                                        </span>
                                                    </>
                                                );
                                                setOpenSurahPlace(
                                                    !openSurahPlace
                                                );
                                            }}
                                            type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
                                        >
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src={SurahPlaceImage}
                                                alt="Surah Place Image"
                                            />
                                            <span className="mt-[2.5px] ml-[4px]">
                                                Madina
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SurahPlace;
