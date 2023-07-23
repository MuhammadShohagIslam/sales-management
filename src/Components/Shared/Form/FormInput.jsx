import { Tooltip } from "react-tooltip";
import { BiEdit } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import InputUpdateModal from "./InputUpdateModal";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
// import { useTheme } from "../../../Context/ThemeContext";

const FormInput = ({
    label,
    tooltipContent,
    tooltipAnchorId,
    type,
    name,
    register,
    placeholder,
    errorName,
    tooltipPlaceOrder = "top-start",
    errorMessage,
    isEdit = false,
    watch,
    reset
}) => {
    const [openUpdateModal, setUpdateModal] = useState(false);
    const [inputV, setInputV] = useState(false);
    const [updateData, setUpdateData] = useState();

    const inputValue = watch && watch(name);

    /* Handle update from here */
    const handleEditInput = (nameValue, inputValue) => {
        setUpdateData({ name: nameValue, inputValue: inputValue });
        if (inputValue) {
            setUpdateModal(!openUpdateModal);
        }else{
            toast.error("Please add some value!")
        }
    };

    useEffect(() => {
        const inputValue = watch && watch(name);
        setInputV(inputValue);
    }, [inputValue, watch, name]);

    return (
        <>
            <div className="mb-2 ">
                <h1 className="flex relative items-center justify-between font-semibold cursor-pointer  mb-2">
                    <span className="flex">
                        <span className="mr-1 text-gray-700">{label}</span>
                        <span id={tooltipAnchorId}>
                            <AiOutlineQuestionCircle className="text-black" />
                        </span>
                    </span>
                    {isEdit && (
                        <span className="relative right-3">
                            {" "}
                            <BiEdit
                                onClick={() => handleEditInput(name, inputV)}
                                className="text-xl hover:text-green-900 transition-all"
                            />
                        </span>
                    )}
                </h1>
                <Tooltip
                    anchorSelect={`#${tooltipAnchorId}`}
                    content={tooltipContent}
                    place={tooltipPlaceOrder}
                />

                <input
                    {...register(name, { required: errorMessage })}
                    type={type}
                    name={name}
                    className={`${
                        errorName
                            ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block"
                            : "placeholder:text-gray-800  rounded-md focus:outline-0 text-gray-800"
                    }  drop-shadow-md outline-none px-5 py-3 w-full focus:ring-primary focus:border-primary border-2 border-transparent`}
                    placeholder={placeholder}
                />
                {/* {errorName && (
                <p className="text-base text-rose-400 mt-1 ml-1">
                    {errorName?.message}
                </p>
            )} */}
            </div>

            {openUpdateModal && (
                <InputUpdateModal
                    openUpdateModal={openUpdateModal}
                    setUpdateModal={setUpdateModal}
                    updateData={updateData}
                    reset={reset}
                />
            )}
        </>
    );
};

export default FormInput;
