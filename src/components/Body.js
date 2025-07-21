import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";

export const Body = () => {

    const [restList, setRestList] = useState(restaurantsList);

    const filterResults = function() {
        // console.log(category);
        const filteredResults = restList.filter((rest) => rest.info.avgRating >= 4.4);
        setRestList(filteredResults);
    }

    return (
        <div className="body-ctr">
            <div className="search-ctr">
                <h2>Search Box Container</h2>
            </div>
            <div className="filters-ctr">
                <h2>Filters : </h2>
                <button onClick={filterResults}>4.5+ Stars</button>
            </div>
            <div className="rests-wpr">
                {restList.map((rest) => <RestaurantCard key={rest.info.id} resObj={rest.info} />)}
            </div>
        </div>
    );
}

export default Body;