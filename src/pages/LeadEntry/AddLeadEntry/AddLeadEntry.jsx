import { useForm } from "react-hook-form";
import FormInput from "../../../Components/Shared/Form/FormInput";
import FormSelect from "../../../Components/Shared/Form/FormSelect";

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
const countryCode = [
    {
        id: 1,
        name: "Bangladesh",
    },
    {
        id: 2,
        name: "Pakistan",
    },
];

const AddLeadEntry = () => {
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
                        <span className="mr-1 text-lg">Lead Type:</span>
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

            <div className="mt-10">
                <div className="grid grid-cols-2 gap-6">
                    <FormInput
                        register={register}
                        label={"Last Id"}
                        type={"text"}
                        name={"lastId"}
                        placeholder={"Please Add Last Id"}
                        errorName={errors.lastId}
                        errorMessage={"Last Id is Required!"}
                    />
                    <FormInput
                        register={register}
                        label={"Date"}
                        type={"date"}
                        name={"date"}
                        placeholder={"Please Add Date"}
                        errorName={errors.lastId}
                        errorMessage={"Date is Required!"}
                    />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-3">
                    <FormInput
                        register={register}
                        label={"Customer Name"}
                        type={"text"}
                        name={"customerName"}
                        placeholder={"Please Add Customer Name"}
                        errorName={errors.customerName}
                        errorMessage={"Customer Name is Required!"}
                    />
                    <div className="mt-6">
                        <FormInput
                            register={register}
                            type={"text"}
                            name={"lastName"}
                            placeholder={"Customer Last Name"}
                            errorName={errors.lastName}
                            errorMessage={"Customer Last Name is Required!"}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-3">
                    <div className="flex gap-5">
                        <div>
                            <FormSelect
                                register={register}
                                label={"Phone Number 1"}
                                isLabel
                                name={"phoneNumberCountryCode"}
                                errorName={errors.phoneNumberCountryCode}
                                selectChoiceName={"Country Code"}
                            >
                                {countryCode.map((lt) => (
                                    <option key={lt.id} value={lt.name}>
                                        {lt.name}
                                    </option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="mt-6 flex-1">
                            <FormInput
                                register={register}
                                type={"text"}
                                name={"phoneNumber1"}
                                placeholder={"Please Add Phone Number 1"}
                                errorName={errors.phoneNumber1}
                                errorMessage={"Phone Number 1 is Required!"}
                            />
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div>
                            <FormSelect
                                register={register}
                                label={"Phone Number 2"}
                                isLabel
                                name={"phoneNumberCountryCode2"}
                                errorName={errors.phoneNumberCountryCode2}
                                selectChoiceName={"Country Code"}
                            >
                                {countryCode.map((lt) => (
                                    <option key={lt.id} value={lt.name}>
                                        {lt.name}
                                    </option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="mt-6 flex-1">
                            <FormInput
                                register={register}
                                type={"text"}
                                name={"phoneNumber2"}
                                placeholder={"Please Add Phone Number 2"}
                                errorName={errors.phoneNumber2}
                                errorMessage={"Phone Number 1 is Required!"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddLeadEntry;
