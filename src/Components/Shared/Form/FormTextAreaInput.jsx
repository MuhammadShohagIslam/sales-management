import { Tooltip } from "react-tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const FormTextAreaInput = ({
    label,
    tooltipContent,
    tooltipAnchorId,
    type,
    name,
    register,
    placeholder,
    errorName,
    errorMessage,
}) => {
    return (
        <div>
            <h1 className="flex items-center font-semibold cursor-pointer  mb-2">
                <span className="mr-1">{label}</span>
                <span id={tooltipAnchorId}>
                    <AiOutlineQuestionCircle className="text-black" />
                </span>
            </h1>
            <Tooltip
                anchorSelect={`#${tooltipAnchorId}`}
                content={tooltipContent}
                place="bottom-start"
            />
            <textarea
                {...register(name, { required: errorMessage })}
                type={type}
                name={name}
                rows="4"
                className={`${
                    errorName
                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block"
                        : "placeholder:text-gray-800  rounded-md focus:outline-0 text-gray-800"
                }  drop-shadow-md outline-none px-5  py-3 w-full`}
                placeholder={placeholder}
            ></textarea>
            {/* {errorName && (
                <p className="text-base text-rose-400 mt-1 ml-1">
                    {errorName?.message}
                </p>
            )} */}
        </div>
    );
};

export default FormTextAreaInput;
