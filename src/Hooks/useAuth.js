import { useSelector } from "react-redux";

export const useAuth = () => {
  const data = useSelector((state) => state?.session?.userReducer?.userInfo);
  return data;
};
