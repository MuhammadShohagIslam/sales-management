/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import LoadingButton from "../LoadingButton";

const InputUpdateModal = ({
    openUpdateModal,
    setUpdateModal,
    updateData,
    reset,
}) => {
    let [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        inputValue: "",
    });
    useEffect(() => {
        setState({
            inputValue: updateData?.inputValue,
        });
    }, [updateData]);

    /* Handle update function */
    const handleUpdateInput = (e) => {
        e.preventDefault();
        const name = updateData?.name;
        if (reset) {
            reset({ [name]: state?.inputValue });
            setUpdateModal(!openUpdateModal)
        }
    };

    return (
        <div
            className={`fixed top-0 left-0 z-50 p-4 overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm bg-white/5 ${
                openUpdateModal ? "block" : "hidden"
            }`}
        >
            <div className="relative w-full max-w-xl  max-h-full mt-40 mx-auto px-2 md:px-5 lg:px-10 xl:px-20">
                <form className="relative bg-white rounded-lg shadow py-7 px-6">
                    <div className="flex items-start justify-between border-b rounded-t ">
                        <h3 className="text-xl font-semibold text-gray-900 ">
                            Edit Input
                        </h3>
                        <button
                            onClick={() => {
                                setUpdateModal(!openUpdateModal),
                                    setState({ inputValue: "" });
                            }}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center mb-1"
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className="pt-4 space-y-6">
                        <div className="flex flex-col gap-5">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="category-name"
                                    className="block mb-2 capitalize text-sm font-medium text-gray-900 "
                                >
                                    {updateData?.name}
                                </label>
                                <input
                                    type="text"
                                    value={state.inputValue}
                                    onChange={(e) =>
                                        setState({
                                            ...state,
                                            inputValue: e.target.value,
                                        })
                                    }
                                    className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 "
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    {/* submit button */}
                    <div className="flex justify-end">
                        {loading ? (
                            <div className="mt-5">
                                <LoadingButton />
                            </div>
                        ) : (
                            <button
                                onClick={handleUpdateInput}
                                type="submit"
                                className="bg-primary px-8 py-2 font-semibold rounded cursor-pointer text-white hover:bg-secondary mt-5"
                            >
                                Update
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InputUpdateModal;
