import { useContext } from 'react';

import { Navigate } from 'react-router';
import { ProgressBar, Spinner } from 'react-bootstrap';
import { AuthContext } from '../Providers/AuthProvider';
import {useLocation} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading) {
       
        return <Spinner animation="border" variant="warning" />
    }

    if(user?.email){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;