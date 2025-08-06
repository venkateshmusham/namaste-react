import { useContext } from "react";
import userInfoContext from "../utils/userInfoContext";
const Contact = () => {
    const {loggedInUser} = useContext(userInfoContext);
    return (
        <div>
            <h1 className="font-bold text-2xl">This is Contact us</h1>
            <p className="text-lg"> User Name : <b> {loggedInUser} </b></p>
        </div>
    )
}

export default Contact;