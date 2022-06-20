import { Toaster } from "react-hot-toast";
import "./App.css";
import NavBar from "./components/navbar";
import NavRoutes from "./components/Routes";

function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{
        className: 'notification',
      }} />
      <NavBar />
      <NavRoutes />
    </div>
  );
}

export default App;
