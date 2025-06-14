import { Navigate, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        return <Loader/>
    }
    if (!user) {
        return <Navigate state={location.pathname} to="/signIn"></Navigate>
    }
    return children;
};

export default PrivateRouter;