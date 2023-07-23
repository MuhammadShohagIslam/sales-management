import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeContext from "./Context/ThemeContext.jsx";
import { Provider } from "react-redux";
import store, { persistor } from "./store/app/store.js";
import { PersistGate } from "redux-persist/integration/react";
import OpenSettingProvider from "./Context/OpenSettingContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ThemeContext>
                    <OpenSettingProvider>
                        <App />
                    </OpenSettingProvider>
                </ThemeContext>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
