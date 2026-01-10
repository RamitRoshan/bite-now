import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    //empty-dependency array, i.e API will call once after initial render
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9966135%26lng%3D77.5920581%26restaurantId%3D448012%26catalog_qa%3Dundefined%26submitAction%3DENTER"

            // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=448012&catalog_qa=undefined&submitAction=ENTER"

            "https://namastedev.com/api/v1/listRestaurantMenu/123456"
        );
        //convert it into js object
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    //shimmer UI
    if(resInfo === null) return <Shimmer/>

 


    const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

   
    const categories =
       resInfo?.cards[4]?.groupedCard?.cardGroupMap
        ?.REGULAR?.cards?.filter(
          (c) => c.card?.card?.itemCards
        ) || [];

    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //     (c) => c.card?.card?.itemCards
    // ) || [];
    
    const itemCards = categories[0]?.card?.card?.itemCards || [];
    console.log("itemCards:", itemCards);




    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* <h3>{costForTwoMessage}</h3> */}
 
            <h2>Menu</h2>
            {/* <ul>
                {itemCards.map()}
                <li>itemCards[0].card.info.name</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>  */}
            <ul>
               {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
                ))}
            </ul>

        </div>

  
    );
}

export default RestaurantMenu;


