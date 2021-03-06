import { Toaster } from "react-hot-toast";
import "./App.css";
import {
  NavBar, NavRoutes
} from "./components";

export const App = () => {
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
