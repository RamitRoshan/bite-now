import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

     
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
             "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9352403%26lng%3D77.624532%26restaurantId%3D5934%26catalog_qa%3Dundefined%26submitAction%3DENTER"
        );
        //convert it into js object
        const json = await data.json();
        console.log(json);
        //setResInfo(json.data);
    };

    //shimmer UI
    // if(resInfo === null) return <Shimmer/>

 


    // const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

   


    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //     (c) => c.card?.card?.itemCards
    // ) || [];
    
    // const itemCards = categories[0]?.card?.card?.itemCards || [];
    // console.log("itemCards:", itemCards);




    return (
        <div className="menu">
            <h1>Name of the Restaurant</h1>
 
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul> 

        </div>

  
    );
}

export default RestaurantMenu;


