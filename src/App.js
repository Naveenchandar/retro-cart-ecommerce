import { Toaster } from "react-hot-toast";
import "./App.css";
import {
  NavBar, NavRoutes
} from "./components";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Toaster position="top-right" toastOptions={{
        className: 'notification',
      }} />
      <NavBar />
      <NavRoutes />
    </GoogleOAuthProvider>
  );
}
