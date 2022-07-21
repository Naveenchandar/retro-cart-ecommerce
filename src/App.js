import { Toaster } from "react-hot-toast";
import "App.css";
import { NavBar, NavRoutes, ErrorBoundaries } from "components";

export const App = () => {
  return (
    <ErrorBoundaries>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'notification',
        }}
      />
      <NavBar />
      <NavRoutes />
    </ErrorBoundaries >
  );
}