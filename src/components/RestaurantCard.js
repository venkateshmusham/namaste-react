import { CDN_URL } from "../utils/constants";
import { BiStar } from "react-icons/bi";

const RestaurantCard = ({resObj}) => {
    const { name, cuisines, avgRating, sla, costForTwoMessage, cloudinaryImageId } = resObj;
    return (
        
            <div className="flex flex-col">
                <div className="mb-2">
                    <img src={CDN_URL+cloudinaryImageId} className="h-50 w-100" alt="rest-logo" />
                </div>
                <div className="mb-3 px-2">
                    <h3 className="font-bold">{name}</h3>
                    <h4 className="font-light text-wrap overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(", ")}</h4>
                </div>
                <div className="flex justify-between px-2">
                    <div>{sla?.slaString} Mins</div>
                    <div className="flex gap-2 items-center"> {avgRating} <BiStar className="text-yellow-400" /> </div>
                </div>
                <div className="font-medium px-2 mb-2">{costForTwoMessage}</div>
            </div>
        
    )
}

export default RestaurantCard;