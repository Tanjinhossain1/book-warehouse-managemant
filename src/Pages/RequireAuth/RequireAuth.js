import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BallTriangle } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {
        return <BallTriangle color="#00BFFF" height={80} width={80} />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;