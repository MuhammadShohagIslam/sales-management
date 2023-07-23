const FormInput = ({
    label,
    type,
    name,
    register,
    placeholder,
    errorName,
    errorMessage,
}) => {
    return (
        <>
            <div className="mb-2 ">
                <h1 className="flex relative items-center justify-between font-semibold cursor-pointer  mb-2">
                    <span className="mr-1 text-gray-700 text-base">{label}</span>
                </h1>

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
        </>
    );
};

export default FormInput;
