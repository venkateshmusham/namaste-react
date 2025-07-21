import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resObj}) => {
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resObj;
    const {deliveryTime} = sla;
    return (
        
            <div className="rest-card-ctr">
                <div className="logo">
                    <img src={CDN_URL+cloudinaryImageId} alt="rest-logo" />
                </div>
                <div className="header">
                    <h2>{name}</h2>
                    <h4>{cuisines.join(", ")}</h4>
                </div>
                <div className="ext-info">
                    <div>{avgRating}</div>
                    <div>{deliveryTime} Mins</div>
                    <div>{costForTwo}</div>
                </div>
            </div>
        
    )
}

export default RestaurantCard;