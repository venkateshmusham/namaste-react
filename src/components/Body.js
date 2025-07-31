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
        <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-between">
                <div className="flex gap-10">
                    <input type="text" name="searchText" className="border border-red-400 px-2 py-1 rounded-md w-80" value={searchText} placeholder="search by restaurant name"  onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="bg-red-400 font-white text-white py-1 px-4 rounded-md" onClick={() => {
                        const filterRestList = restList.filter((rest) => rest.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestList(filterRestList);
                    }}>Search</button>
                </div>
                <div className="flex gap-8 items-center">
                    <h2>Filters : </h2>
                    <button className="bg-green-300 font-white text-white py-1 px-4 rounded-md" onClick={filterResults}>4+ Stars</button>
                </div>
            </div>
            <div className="flex flex-wrap gap-5">
                {filteredRestList.map((rest) => <Link className="w-75 border border-blue-100 rounded-md hover:bg-amber-100" key={rest.card.card.info.id} to={"/restaurants/"+rest.card.card.info.id}><RestaurantCard  resObj={rest.card.card.info} />  </Link> )}
            </div>
        </div>
    );
}

export default Body;