import { useForm } from "react-hook-form";
import { useTheme } from "../../../Context/ThemeContext";
import { useUserLoginMutation } from "../../../store/service/user/userApiService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/features/user/userSlice";
import { useEffect, useState } from "react";
import logo from "../../../assets/logo/logo.png";
import ilogo from "../../../assets/logo/infobutton.png";

const Login = () => {
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [loginUser] = useUserLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (data) => {
    setLoading(true);
    const userData = {
      email: data.email,
      password: data.password,
    };

    loginUser(userData)
      .then((res) => {
        // setLoading(false);
        if (res?.data?.success) {
          navigate("/dashboard", { replace: true });
          toast.success(res?.data?.message);
          const userInfo = {
            token: res?.data?.data?.accessToken,
            userInfo: res.data?.data?.userInfo,
          };
          dispatch(addUser(userInfo));
          setLoading(false);
        } else {
          toast.error(res.data.message);
          setLoading(false);
          setLoginError(res.error.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        // setLoginError(error);
      });
  };
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    // <div
    //   className={`flex justify-center items-center h-screen min-h-[600px] ${
    //     isDark ? "bg-darkBg" : "bg-white"
    //   }`}
    // >
    //   <form
    //     className={`max-w-md w-full p-6 rounded shadow-md border  ${
    //       isDark ? "border-primary border-opacity-40" : "border-gray-100"
    //     }`}
    //     onSubmit={handleSubmit(onSubmit)}
    //   >
    //     <div className="mb-4">
    //       <label
    //         htmlFor="email"
    //         className={`block mb-2 text-sm font-medium  ${
    //           isDark ? "text-primary" : "text-gray-600"
    //         }`}
    //       >
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         required
    //         placeholder="example@mail.com"
    //         {...register("email", { required: true })}
    //         className={`w-full p-2  rounded  border focus:outline-none  ${
    //           isDark
    //             ? "border-primary border-opacity-40 bg-darkBg text-primary placeholder:text-gray-600"
    //             : "border-gray-300"
    //         }`}
    //       />
    //     </div>
    //     <div className="mb-6">
    //       <label
    //         htmlFor="password"
    //         className={`block mb-2 text-sm font-medium  ${
    //           isDark ? "text-primary" : "text-gray-600"
    //         }`}
    //       >
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         required
    //         placeholder="********"
    //         {...register("password", { required: true })}
    //         className={`w-full p-2  rounded  border focus:outline-none  ${
    //           isDark
    //             ? "border-primary border-opacity-40 bg-darkBg text-primary placeholder:text-gray-600"
    //             : "border-gray-300"
    //         }`}
    //       />
    //     </div>
    //     <div className="flex justify-end">
    //       {loading ? (
    //         <button disabled className="px-4 py-[6px]">
    //           <span
    //             className={`loading loading-dots loading-md  ${
    //               isDark && "text-primary"
    //             }`}
    //           ></span>
    //         </button>
    //       ) : (
    //         <button
    //           type="submit"
    //           className={`px-4 py-2 border rounded-sm ${
    //             isDark
    //               ? " border-primary border-opacity-40 text-primary hover:bg-primary hover:text-white transition-all "
    //               : "bg-white"
    //           }`}
    //         >
    //           Login
    //         </button>
    //       )}
    //     </div>
    //   </form>
    // </div>

    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:justify-items-center">
        <div className="text-left">
          <div className="flex items-center gap-5">
            <img className="w-48 rounded-xl" src={logo} alt="ADB logo" />
            <div className="text-xl md:text-5xl font-bold uppercase text-[#002069]">
              <p>proggamoy</p>
              <p className="flex gap-1">
                <span>quran</span>
                <div className="translate-y-0 md:-translate-y-4">
                  <span
                    className="tooltip tooltip-bottom font-normal normal-case text-left opacity-80"
                    data-tip="Only authorized user can access to the system and it is managed and maintained by the Proggamoy quran. Never disclose your password or any security information to anyone. Update your PC with latest Anti-virus Software, personal firewall and security updates for browsers. Recommended browsers are Mozila Firefox, Google Chrome and Internet Explorer (L V)."
                  >
                    <img
                      className="w-5 cursor-pointer"
                      data-tip="hello"
                      src={ilogo}
                      alt="instruction logo"
                    />
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="card flex-shrink-1 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                className="input input-bordered focus:outline-none focus:border-primary focus:border-opacity-30"
                type="email"
                placeholder="Enter your Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control">
              <input
                className="input input-bordered focus:outline-none focus:border-primary focus:border-opacity-30"
                type="password"
                placeholder="Enter your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {loginError && <p className="text-red-600 text-xs">{loginError}</p>}
            <div className="form-control mt-6">
              {loading ? (
                <span className="loading loading-dots loading-md mx-auto"></span>
              ) : (
                <input
                  className="btn bg-primary hover:bg-primary text-white"
                  type="submit"
                  value="Login"
                />
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 py-5 bg-white w-full text-center font-semibold text-primary">
        Proggamoy quran | {year} All Rights Reserved
      </div>
    </section>
  );
};

export default Login;
