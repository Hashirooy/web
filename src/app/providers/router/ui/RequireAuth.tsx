import { getUserAuthData } from "entities/User"
import { get } from "http"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

interface RequireAuth{
    children?: React.ComponentType
}


export const RequireAuth = ({children}:{children:JSX.Element}) => {

let isAuth = useSelector(getUserAuthData)
const location = useLocation()
if(!isAuth){
    return <Navigate to={RoutePath.main} state={{from: location}} replace/>
}
return children

}