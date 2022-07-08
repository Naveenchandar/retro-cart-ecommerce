import { Toaster } from "react-hot-toast";

export const Notification = ({ children }) => {
    return (
        <Toaster
            position="top-center"
            reverseOrder={false}
        >
            {children}
        </Toaster>
    )
}