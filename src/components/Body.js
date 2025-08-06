import { useState,useEffect, useContext } from "react";
import { Link } from "react-router";
import useRestaurantCard from "../utils/useRestaurantCard";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import userInfoContext from "../utils/userInfoContext";
export const Body = () => {
    
    const status = useOnlineStatus();
    
    const results = useRestaurantCard();

    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

    const {loggedInUser, setUserName} = useContext(userInfoContext);
    useEffect(() => {
        setRestList(results);
        setFilteredRestList(results);
    }, [results]);

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
        <div className="flex flex-col gap-10 mx-20 my-10">
            <div>
                <label> User Name : {" "}</label>
                <input type="text" className="border border-gray-400 px-2 rounded-md" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}} />
            </div>
            <div className="flex justify-between">
                <div className="flex gap-10">
                    <input type="text" name="searchText" className="border border-red-400 px-2 py-1 rounded-md w-80" value={searchText} placeholder="search by restaurant name"  onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="bg-red-400 font-white text-white py-1 px-4 rounded-md" onClick={() => {
                        const filterRestList = restList.filter((rest) => rest.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        if(filterRestList.length === 0) {
                            alert("No results found");
                            return false;
                        }
                        setFilteredRestList(filterRestList);
                    }}>Search</button>
                </div>
                <div className="flex gap-8 items-center">
                    <h2>Filters : </h2>
                    <button className="bg-green-300 font-white text-white py-1 px-4 rounded-md" onClick={filterResults}>4+ Stars</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-between gap-y-12 ">
                {filteredRestList.map((rest) => (
                    <Link 
                    className="w-50 border border-blue-100 rounded-md hover:bg-amber-100 relative" 
                    key={rest.card.card.info.id} to={"/restaurants/"+rest.card.card.info.id}>
                        {rest.card.card.info.promoted ? <RestaurantCardPromoted resObj={rest.card.card.info} /> : <RestaurantCard resObj={rest.card.card.info} />}
                          
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;