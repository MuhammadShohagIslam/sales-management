import { AiOutlineRightCircle } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
/* import Image from "../assets/icon/dashboard.png"; */

const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 relative">
        {[
          "Leads",
          "K1",
          "Priority",
          "Transferred",
          "Accepted",
          "Sold",
          "Hold",
          "Closed",
          "Upcoming",
          "Flow Up",
          "Call Again",
          "UnAddressed",
        ]?.map((a, inx) => (
          <div key={inx} className="pt-8 relative bg-lime-900 rounded-md mb-2">
            <div>
              <FaRegUser className="text-7xl absolute right-5 top-12" />
              <div className="flex z-30 relative justify-between pb-10 px-5">
                <div>
                  <h2 className="text-3xl font-bold text-white capitalize">
                    {a}
                  </h2>
                  <p className="mt-5 text-white">10</p>
                </div>
              </div>
              <div className="flex z-30 relative justify-center items-center py-3 backdrop-brightness-125 bg-white/20 rounded-b-md cursor-pointer">
                <h2 className="flex items-center text-white">
                  More Info{" "}
                  <span className="ml-1 mt-[2px]">
                    <AiOutlineRightCircle />
                  </span>
                </h2>
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;

{
  /* <div className="pt-8 relative backdrop-blur-md backdrop-brightness-150 bg-green-50 rounded-md">
                    <div className="flex justify-between pb-10 px-5">
                        <div className="z-30 relative">
                            <h2 className="text-3xl font-bold text-white">
                                Leads
                            </h2>
                            <p className="mt-5 font-bold text-white">10</p>
                        </div>
                        <div>
                            <FaRegUser className="h-20 w-20 text-gray-50"/>
                        </div>
                    </div>
                    <div className="flex  z-30 relative justify-center items-center py-3  contrast-50 rounded-b-md cursor-pointer">
                        <h2 className="flex items-center">
                           <span className="text-white"> More Info{" "}</span>
                            <span className="ml-1">
                                <AiOutlineRightCircle />
                            </span>
                        </h2>
                    </div>
                </div> */
}
