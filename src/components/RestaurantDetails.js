import { useParams } from "react-router";

import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
    const { resId } = useParams();
    
    const resDetails = useRestaurantDetails(resId);

    if(resDetails === null) {
        return ( <Shimmer /> )
    }

    const resInfo = resDetails.cards[2].card.card.info;
    const {name, avgRating, costForTwoMessage, cuisines } = resInfo;
    const categories = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const recCat = categories.filter((cate) => {
        return cate.card.card.title === "Recommended"
    })
    return (
        <>
        <div>
            <h2> {name}</h2>
            <h3>{avgRating}</h3>
            <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
        </div>
        <div>
            <h3>Full Menu</h3>
            <div className="menu-ctr">
                {recCat[0].card.card.itemCards.map((cat) => {
                    const { id, name, price, ratings, isVeg, description, imageId, defaultPrice } = cat.card.info;
                    if(price) {
                        return (
                            <div key={id} className="category">
                                <div key={id} className="menu-item">
                                    <div>
                                        <div className="item-ttl">
                                            <div className={isVeg === 1 ? "veg-item" : "non-veg-item"}></div>
                                            <h4>{name}</h4>
                                        </div>
                                        <div>Rs. {price / 100}</div>
                                        <div>
                                            {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})
                                        </div>
                                        <div>{description}</div>
                                    </div>
                                    <div className="item-img-ctr">
                                        <img src={CDN_URL+imageId} />
                                    </div>
                                </div>
                            </div> 
                        )
                    }
                })}
            </div>
        </div>
        </>
    )
}

export default RestaurantDetails;