import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
   
    const username = useSelector( state => state.user )

    if( username !== "Entrenador") {
        return <Outlet />
    }else{
        return <Navigate to="/"/> 
    }

};

export default ProtectedRoutes;