import { useState, useEffect } from "react";
import { REST_DTLS_URL } from "./constants";

const useRestaurantDetails = (resId) => {
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    
    useEffect(() => {
        fetchRestaurantDetails();        
    }, []);

    const fetchRestaurantDetails = async () => {
        const data = await fetch(REST_DTLS_URL + resId);
        const json = await data.json();

        console.log(json);
        setRestaurantDetails(json.data);
    };

    return restaurantDetails;
}

export default useRestaurantDetails;