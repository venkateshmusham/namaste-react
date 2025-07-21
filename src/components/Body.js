import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filteredRestList, setFilteredRestList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const url = "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.10197&lng=77.5863591&str=Biryani&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=a7d4b45a-16be-8f6d-2b6b-e95ac25e39b4&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBiryani.png%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT";
        const data = await fetch(url);
        const jsonData = await data.json();
        setRestList(jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
        setFilteredRestList(jsonData?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    }

    const filterResults = function() {
        const filteredResults = filteredRestList.filter((rest) => rest.card.card.info.avgRating >= 4);
        setFilteredRestList(filteredResults);
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
                <button onClick={filterResults}>4.5+ Stars</button>
            </div>
            <div className="rests-wpr">
                {filteredRestList.map((rest) => <RestaurantCard key={rest.card.card.info.id} resObj={rest.card.card.info} />)}
            </div>
        </div>
    );
}

export default Body;