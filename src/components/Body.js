import { useState,useEffect } from "react";
import { Link } from "react-router";
import useRestaurantCard from "../utils/useRestaurantCard";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
    
    const status = useOnlineStatus();
    
    const results = useRestaurantCard();

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setRestList(results);
        setFilteredRestList(results);
    }, [results])

    const filterResults = function() {
        const filteredResults = filteredRestList.filter((rest) => rest.card.card.info.avgRating >= 4);
        setFilteredRestList(filteredResults);
    }

    if(status !== true) {
        return (
            <h1>
                You are offline, please check your internet ..!!!
            </h1>
        )
    }

    return filteredRestList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body-ctr">
            <div className="search-ctr">
                <input type="text" className="search-text" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} placeholder="search by restaurant name" />
                <button onClick={() => {
                    const filterRestList = restList.filter((rest) => rest.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestList(filterRestList);
                }}>Search</button>
            </div>
            <div className="filters-ctr">
                <h2>Filters : </h2>
                <button onClick={filterResults}>4+ Stars</button>
            </div>
            <div className="rests-wpr">
                {filteredRestList.map((rest) => <Link key={rest.card.card.info.id} to={"/restaurants/"+rest.card.card.info.id}><RestaurantCard  resObj={rest.card.card.info} />  </Link> )}
            </div>
        </div>
    );
}

export default Body;