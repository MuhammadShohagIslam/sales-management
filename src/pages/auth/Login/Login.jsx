import { useForm, Controller } from "react-hook-form";
import { useUserLoginMutation } from "../../../store/service/user/userApiService";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../../store/features/user/userSlice";
import { useEffect, useState } from "react";
import { FaLock, FaEnvelope, FaAtlassian } from "react-icons/fa";

const Login = () => {
  const {
    register,
    watch,
    control,
    setValue,
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
    <section className="pt-[50%] md:hero md:pt-0 min-h-screen bg-banner bg-cover backdrop-blur-md">
      <div className="hero-content grid grid-cols-1 lg:justify-items-center">
        <div className="card flex-shrink-1 md:w-96  shadow-2xl bg-base-100">
          <div className="py-5 flex flex-col justify-center items-center">
            <FaAtlassian className="text-5xl" />
            <div className="text-center pt-3">
              <h1 className="text-2xl font-semibold">Login</h1>
              <p>Sign in to start your session</p>
            </div>
          </div>
          <form className="px-7 pb-10" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-control relative">
                <input
                  className="input input-bordered focus:outline-none focus:border-primary focus:border-opacity-30 my-2"
                  type="email"
                  placeholder="Enter your Email"
                  {...register("email", { required: "Email is required" })}
                />
                <FaEnvelope className="absolute right-4 top-6 bottom-0" />
              </div>
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email?.message}</p>
              )}
            </div>
            <div>
              <div className="form-control relative">
                <input
                  className="input input-bordered focus:outline-none focus:border-primary focus:border-opacity-30 my-2"
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
                <FaLock className="absolute right-4 top-6 bottom-0" />
              </div>
              {errors.password && (
                <p className="text-red-600 text-xs">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {loginError && <p className="text-red-600 text-xs">{loginError}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between mt-7 items-center">
              <div>
                <div className="flex gap-2 mb-5">
                  <Controller
                    name="rememberMe"
                    control={control}
                    defaultValue={""}
                    render={({ field }) => {
                      return (
                        <input
                          {...field}
                          className="mt-1 text-primary"
                          type="checkbox"
                          {...register("rememberMe")}
                        />
                      );
                    }}
                  />
                  <label>Remember Me</label>
                </div>
              </div>
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
            <div className="mt-3">
              <p>Forget my password</p>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="absolute bottom-0 py-5 bg-white w-full text-center font-semibold text-primary">
        Proggamoy quran | {year} All Rights Reserved
      </div> */}
    </section>
  );
};

export default Login;
