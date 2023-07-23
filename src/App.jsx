import { RouterProvider } from "react-router-dom";
import 'react-tooltip/dist/react-tooltip.css'
import { useTheme } from "./Context/ThemeContext";
import routers from "./routes/Routers";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./Hooks/useAuth";

function App() {
  const { isDark } = useTheme();
  const data = useAuth();
  console.log(data);
  return (
    <div
      className={`min-h-screen min-w-full ${
        isDark ? "bg-darkBg text-white" : "bg-white text-black"
      }`}
    >
      <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
}

export default App;
