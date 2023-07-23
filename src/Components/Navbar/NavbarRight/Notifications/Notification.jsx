import { Link } from "react-router-dom";
import { useTheme } from "../../../../Context/ThemeContext";

const Notification = () => {
  const { isDark } = useTheme();
  return (
    <Link
      to="/"
      className={`flex px-4 py-3 border-b  ${
        isDark
          ? "border-deepDarkBg bg-darkBg hover:bg-deepDarkBg"
          : "border-white text-primary"
      }`}
    >
      <div className="flex-shrink-0">
        <img
          className="rounded-full w-11 h-11"
          src="/images/users/bonnie-green.png"
          alt="Jese image"
        />
      </div>
      <div className="w-full pl-3">
        <div className="text-secondary font-normal text-sm mb-1.5 ">
          New message from{" "}
          <span className="font-semibold text-primary">Bonnie Green</span>
          All set for the
        </div>
        <div className="text-xs font-medium text-primary-700 ">
          a few moments ago
        </div>
      </div>
    </Link>
  );
};

export default Notification;
