
import { IoIosArrowDropdown } from "react-icons/io";
import RestaurantItem from "./RestaurantItem";
import { useState } from "react";
const RestaurantMenuCategory = ({data, showItems, setShowIndexCB}) => {
    const handleClick = () => {
        setShowIndexCB();
    }
    return(
        <div className="flex flex-col gap-y-1">
            <div className="flex justify-between cursor-pointer" onClick={handleClick} >
                <h2 className="font-extrabold text-lg">{data.title} ({data.itemCards.length})</h2>
                <IoIosArrowDropdown />
            </div>
            {showItems && <RestaurantItem items={data.itemCards} />}
        </div>
    )
} 

export default RestaurantMenuCategory;