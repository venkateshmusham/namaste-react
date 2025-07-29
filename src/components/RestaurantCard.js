import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resObj}) => {
    const { name, cuisines, avgRating, sla, costForTwoMessage, cloudinaryImageId } = resObj;
    return (
        
            <div className="rest-card-ctr">
                <div className="logo">
                    <img src={CDN_URL+cloudinaryImageId} alt="rest-logo" />
                </div>
                <div className="header">
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                </div>
                <div className="ext-info">
                    <div>{avgRating}</div>
                    <div>{sla?.slaString} Mins</div>
                    <div>{costForTwoMessage}</div>
                </div>
            </div>
        
    )
}

export default RestaurantCard;