const FormSelect = ({
    label,
    name,
    register,
    children,
    errorName,
    errorMessage,
    selectChoiceName,
    isLabel=false,
}) => {
    return (
        <div>
            {isLabel && (
                <h1 className="flex items-center font-semibold cursor-pointer  mb-2">
                    <span className="mr-1">{label}</span>
                </h1>
            )}

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
        </div>
    );
};

export default FormSelect;
