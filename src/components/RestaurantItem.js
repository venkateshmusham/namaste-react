import { BiStar } from "react-icons/bi";
import { CDN_URL } from "../utils/constants";

const RestaurantItem = ({items}) => {
    return (
        <>
            {items.map(item => (
                    <div key={item.card.info.id} className="flex justify-between border-b-[1px] border-gray-300 py-3">
                        <div className="flex flex-col gap-y-10">
                            <div>
                                <h2 className="font-bold">{item.card.info.name}</h2>
                                <p>₹ {item.card.info.price/100}</p>
                                {
                                    item?.card?.info?.ratings?.aggregatedRating?.rating && (
                                    <p className="flex gap-1 items-center"> 
                                        <BiStar className="text-yellow-400" /> 
                                        {item.card.info.ratings.aggregatedRating.rating} 
                                        ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                                    </p>)
                                }
                            </div>
                            <div>{item.card.info.description}</div>
                        </div>
                        
                        <div className="w-50 h-40">
                            <img src={CDN_URL + item.card.info.imageId} className="object-cover w-[150px] h-[150px]" />
                        </div>
                    </div>
                ))}
        </>
    )
}

export default RestaurantItem;