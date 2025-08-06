import { createContext } from "react";

const userInfoContext = createContext({
    loggedInUser : "FDA User"
});

export default userInfoContext;