import {Navigate, Outlet,useLocation} from "react-router-dom";
import {useState} from "react";

const PrivateRouter =({isAuthorized})=>{
    
    console.log(isAuthorized);
    
    // const [isAuthorized, setIsAuthorized]=useState(false)

return (<div>{isAuthorized ? <Outlet /> : <Navigate to="/login" />}</div>);
}
export default PrivateRouter;