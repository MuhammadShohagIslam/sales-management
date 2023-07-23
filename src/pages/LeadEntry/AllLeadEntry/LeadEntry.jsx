import { useForm } from "react-hook-form";

const leadType = [
    {
        id: 1,
        name: "BTI Sale",
    },
    {
        id: 2,
        name: "PTI Sale",
    },
];

const LeadEntry = () => {
    const {
        register,
        formState: { errors },
    } = useForm();
    return (
        <section>
            <div className="border-b-[2px] border-green-200">
                <h2 className="text-2xl text-gray-700 font-bold pb-4">
                    Lead Entry
                </h2>
            </div>
            <div>
                <h2 className="text-xl text-gray-600 font-bold pt-2">
                    Customer Information
                </h2>
            </div>

            <div>
                <div className="mb-2 flex w-[50%] mx-auto">
                    <h1 className="flex w-28 items-center font-semibold cursor-pointer  mb-2">
                        <span className="mr-1">Lead Type</span>
                    </h1>

                    <select
                        {...register("leadType", {
                            required: "Lead Type is required!",
                        })}
                        name={name}
                        className={`${
                            errors.leadType
                                ? "bg-red-50 border-red-500 text-red-700 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block"
                                : "placeholder:text-gray-800  rounded-md focus:outline-0 text-gray-800"
                        }  drop-shadow-md outline-none px-5 py-3 w-full focus:ring-primary focus:border-primary border-2 border-transparent`}
                    >
                        <option value={``}>Please choice lead Type</option>
                        {leadType.map((lt) => (
                            <option key={lt.id} value={lt.name}>
                                {lt.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </section>
    );
};

export default LeadEntry;
