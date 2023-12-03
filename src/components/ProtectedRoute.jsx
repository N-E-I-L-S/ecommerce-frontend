import React from 'react'
import {Navigate} from "react-router-dom"
import UserAuth from '../Context_Functions/UserAuth';
function ProtectedRoute(props) {
    const {user} = UserAuth();
    if(user)
    return props.page
    return <Navigate to ='/'/>
}

export default ProtectedRoute