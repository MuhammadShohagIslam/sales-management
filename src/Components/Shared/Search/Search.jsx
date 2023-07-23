import { BiSearch } from "react-icons/bi";
import { useTheme } from "../../../Context/ThemeContext";

const Search = ({
  setPerPage,
  setSearchValue,
  searchValue,
  value,
  placeholderText,
}) => {
  const { isDark } = useTheme();

  return (
    <div className="flex items-center justify-between pb-4">
      <div className="w-32 ">
        <select
          onChange={(e) => setPerPage(parseInt(e.target.value))}
          className={` border border-primary  text-sm rounded-lg focus:outline-none block w-full p-2 ${
            isDark ? "bg-darkBg text-primary" : "bg-gray-50"
          }`}
        >
          {value.map((v, index) => (
            <option key={index} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
      <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <BiSearch className={`${isDark ? "text-primary" : ""}`} />
        </div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className={`block p-2 pl-10 text-sm border  rounded-lg  lg:w-80 w-full  focus:outline-none text-primary ${
            isDark
              ? "bg-darkBg border-primary placeholder:text-primary placeholder:text-opacity-60"
              : "bg-white border-gray-300"
          }`}
          placeholder={`Search for ${placeholderText}`}
        />
      </div>
    </div>
  );
};

export default Search;
