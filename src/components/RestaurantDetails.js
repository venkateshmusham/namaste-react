import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import { useState } from "react";

const RestaurantDetails = () => {
    const { resId } = useParams();    
    const resDetails = useRestaurantDetails(resId);

    const [showIndex, setShowIndex] = useState(0);

    if(resDetails === null) {
        return ( <Shimmer /> )
    }

    const resInfo = resDetails.cards[2].card.card.info;
    const {name, costForTwoMessage, cuisines } = resInfo;
    const categories = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c => {
        return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    });
    
    return (
        <div className="mx-20 my-10 flex flex-col items-center gap-y-8">
            <div>
                <h2 className="font-bold text-2xl"> {name}</h2>                
                <p className="font-light">{cuisines.join(", ")} - {costForTwoMessage}</p>
            </div>
            <div className="mx-40 flex flex-col gap-y-4 justify-between  min-w-3xl">
                {categories.map ((category, index) => (
                    <RestaurantMenuCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card} 
                        showItems={index === showIndex ? true : false}
                        setShowIndexCB={() => {setShowIndex(index)}}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantDetails;