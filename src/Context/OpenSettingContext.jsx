import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const OpenSettingContext = createContext();

const OpenSettingProvider = ({ children }) => {
    const [openSetting, setOpenSetting] = useState(false);
    const value = { openSetting, setOpenSetting };

    return (
        <OpenSettingContext.Provider value={value}>
            {children}
        </OpenSettingContext.Provider>
    );
};

OpenSettingProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useOpenSetting = () => {
    const openSetting = useContext(OpenSettingContext);
    return openSetting;
};

export default OpenSettingProvider;
