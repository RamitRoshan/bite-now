import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    /*using useEffect(), we will make an api call
    it has 2 arguments one is call back fn and other is
    optional arguments([]-empty dependency array), so
    it will render once when fetching the data from
    an api */
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9352403%26lng%3D77.624532%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );
        //convert it into js object
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    //shimmer UI
    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, costForTwo} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwo}</p>
            <h3></h3>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;