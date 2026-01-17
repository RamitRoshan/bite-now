import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    //const [resInfo, setResInfo] = useState(null);

    //useParams hook gives us a resID
    const {resId} = useParams(); 

    const resInfo = useRestaurantMenu(resId);

    const dummy = "Dummy data"; 

    //it will show the indexlist of dish like if index = 0, 1st willbe open
    //if index=1, 2md will be open and all will be colapse
    const [showIndex, setShowIndex] = useState(null);

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

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap
        // ?.REGULAR?.card);    
 
    const itemCards = categories[0]?.card?.card?.itemCards || [];
    // console.log("itemCards:", itemCards);




    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines?.join(", ") || "Cuisine not available"} - {costForTwoMessage}
            </p>
    

            {/* categories accodians*/}
            {categories.map((category, index) => (
                //Restaurant Category is a controlled components
                <RestaurantCategory
                key={category?.card?.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false} //if index is 0 then true
                setShowIndex = {() => setShowIndex(index)}
                dummy={dummy}
                />
            ))}


            {/* <h2>Menu</h2>
            <ul>
               {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}
                </li>
                ))}
            </ul> */}

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
