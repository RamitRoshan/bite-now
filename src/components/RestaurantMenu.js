import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    //const [resInfo, setResInfo] = useState(null);

    //useParams hook gives us a resID
    const {resId} = useParams(); 

    const resInfo = useRestaurantMenu(resId);

    //empty-dependency array, i.e API will call once after initial render
    // useEffect(() => {
    //     fetchMenu();
    // }, []);
    // const fetchMenu = async () => {
    //     // const data = await fetch(
    //     //     `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    //     // );

    //     const data = await fetch(MENU_API + resId);

    //     //Converts JSON text → JavaScript object
    //     const json = await data.json();
    //     //console.log(json);
    //     setResInfo(json.data); // store restaurant menu data in state and re-render UI
    // };

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
            <p>{cuisines?.join(", ") || "Cuisine not available"} - {costForTwoMessage}</p>
            {/* <h3>{costForTwoMessage}</h3> */}
 
            <h2>Menu</h2>
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



/*
To check restaurant with id, we can use these ID
"123456",
"234567",
"345678",
"456789",
"567890",
"678901",
"789012",
"890123",
"901234"

here we hae to type:  http://localhost:1234/restaurants/123456
*/
