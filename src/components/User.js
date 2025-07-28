import { useState } from "react";

const User = ({name, location, linkedin, type}) => {
    
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h3>
                <a href={linkedin} target="_blank">
                    Linked-In : venkatesh-musham-87653135
                </a>
            </h3>
            <h4>{type}</h4>
            <div>
                <span> Count : {count} </span>
                <button onClick={() => {
                    setCount((prev) => prev+1)
                }} >Increment</button>
            </div>
        </div>
    )
}

export default User;