import React from "react";

import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <div>
//             <h1>This is about us</h1>
//             <div className="user-ctr">
//                 <User  name={"Musahm Venkatesh"} location={"Bangalore"} linkedin={"https://www.linkedin.com/in/venkatesh-musham-87653135"} />
//                 <UserClass name={"Venkatesh Musham"} location={"Bengaluru"} linkedin={"https://www.linkedin.com/in/venkatesh-musham-87653135"} />
//             </div>
//         </div>
//     )
// }

// converting About functional component to class based components

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>This is about us</h1>
                <div className="user-ctr">
                    <User name={"Musahm Venkatesh"} location={"Bengaluru"} type={"functional component"} linkedin={"https://www.linkedin.com/in/venkatesh-musham-87653135"} />
                    <UserClass name={"Venkatesh"} location={"Bengaluru"} type={"class component"} linkedin={"https://www.linkedin.com/in/venkatesh-musham-87653135"} />
                </div>
            </div>
        )
    }
}


export default About;