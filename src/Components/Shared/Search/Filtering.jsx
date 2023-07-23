import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Filtering = () => {
    return (
        <div className="flex justify-between items-center p-8">
            <div className="flex items-center gap-4">
                <p className="text-primary font-semibold text-xl">Filter</p>
                <input
                    type="text"
                    placeholder="Search here..."
                    className="placeholder:text-gray-600  rounded-md focus:outline-0 text-gray-800
             shadow-lg outline-none px-5 py-2.5 w-full focus:ring-primary focus:border-primary border-2 border-transparent"
                />
            </div>
            <div>
                <div className="flex justify-center items-center gap-2">
                    <FaAngleLeft className="text-white bg-primary w-9 h-9 text-sm p-3 rounded-full cursor-pointer" />
                    {[...Array(7)].map((element, index) => (
                        <button
                            className="bg-white shadow-md hover:bg-primary transition-all font-semibold hover:text-white rounded-full w-9 h-9 text-black"
                            key={index}
                        >
                            {++index === 5 ? "..." : index}
                        </button>
                    ))}
                    <button className="bg-primary shadow-md font-semibold   rounded-full w-9 h-9 text-white">
                        7
                    </button>
                    <FaAngleRight className="text-white bg-primary w-9 h-9 text-sm p-3 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Filtering;
