import { Tooltip } from "react-tooltip";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const FormSelect = ({
    label,
    tooltipContent,
    tooltipAnchorId,
    name,
    register,
    children,
    errorName,
    errorMessage,
    selectChoiceName,
    placeOfTooltip,
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
                place={placeOfTooltip}
            />

            <select
                {...register(name, { required: errorMessage })}
                name={name}
                className={`${
                    errorName
                        ? "bg-red-50 border-red-500 text-red-700 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block"
                        : "placeholder:text-gray-800  rounded-md focus:outline-0 text-gray-800"
                }  drop-shadow-md outline-none px-5 py-3 w-full focus:ring-primary focus:border-primary border-2 border-transparent`}
            >
                <option value={``}>Please choice {selectChoiceName}</option>
                {children}
            </select>

            {/* {errorName && (
                <p className="text-base text-rose-400 mt-1 ml-1">
                    {errorName?.message}
                </p>
            )} */}
        </div>
    );
};

export default FormSelect;
