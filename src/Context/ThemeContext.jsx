import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  // setInterval(() => {
  //   setIsDark(!isDark);
  // }, 2000);
  const value = { isDark, setIsDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default ThemeProvider;
