import { useEffect, useState } from "react";
import { RESTS_URL } from "./constants";


const useRestaurantCard = () => {
    const [restaurantCard, setRestaurantCard] = useState([]);
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const data = await fetch(RESTS_URL);
        const json = await data.json();

        // console.log(json.data);
        setRestaurantCard(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    }

    return restaurantCard;
}

export default useRestaurantCard;