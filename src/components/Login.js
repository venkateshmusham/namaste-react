import { useContext } from "react";
import userInfoContext from "../utils/userInfoContext";
const Login = () => {
    
    const {loggedInUser, setUserName} = useContext(userInfoContext);

    return (
        <div className="m-10">
            <label>
                User Name : {" "}
            </label>
            <input className="border border-black rounded-md px-2" type="text" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}} />
        </div>
    )
}

export default Login;