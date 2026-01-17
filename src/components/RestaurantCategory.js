import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {

    // console.log(data);

    //state variable will decide whether itemlist will shown or not
    //bydefault -use false here 
    const [showItems, setShowItems] = useState(false);

    
    const handleClick = () => {
        //if showitems is true, make it false and if showitems is false make it true
        setShowItems(!showItems);
    }
    return (
        <div>

            {/* Accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                
                <div 
                    className="flex justify-between cursor-pointer" 
                    onClick={handleClick}
                >
                    <span className="font-semibold text-lg">
                        {/* optional Chaining */}
                        {data?.title} ({data?.itemCards?.length|| 0})
                    </span>
                    <span>⬇️</span>
                </div>
                


                {/* Accordian Body ,
                when showItem is true then show the items*/}
                {showItems && <ItemList items={data.itemCards}/>}
            </div>

        </div>
    );
}

export default RestaurantCategory;