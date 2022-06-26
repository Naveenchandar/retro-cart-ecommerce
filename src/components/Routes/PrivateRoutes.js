import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context'

export const PrivateRoutes = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    return (
        user?.email ? children : <Navigate to='/login' replace state={{ from: location }} />
    )
}