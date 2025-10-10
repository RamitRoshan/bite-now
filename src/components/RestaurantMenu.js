import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

     
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9352403%26lng%3D77.624532%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
            // ✅ Correct Swiggy MENU API (not restaurant list API)

            // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9352403%26lng%3D77.624532%26restaurantId%3D"
            "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.9352403%26lng%3D77.624532%26restaurantId%3D"
        );
        //convert it into js object
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    //shimmer UI
    if(resInfo === null) return <Shimmer/>

    // const {name, cuisines, costForTwo} = resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;

    // ✅ Correct path for name, cuisines, cost
    // const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info || {};

    // // ✅ Extract categories that contain itemCards
    // const categories =
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    //   (c) => c.card?.card?.itemCards
    // ) || [];

    // const itemCards = categories[0]?.card?.card?.itemCards || [];


//     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
//     console.log("itemCards:", itemCards);


//     // ✅ Correct filter to get all categories having itemCards
//     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
//     (c) => c.card?.card?.itemCards
//   ) || [];

const{name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info || {};

    // const {itemCards} = 
    //  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    // // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.filter(c=>c.info?.cuisines);
    // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    // (c) => c.card?.card?.itemCards
    //  );

     const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
  (c) => c.card?.card?.itemCards
) || [];

const itemCards = categories[0]?.card?.card?.itemCards || [];
console.log("itemCards:", itemCards);

 


    return (
//         <div className="menu">
//             <h1>{name}</h1>
//             <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
//             <h2>Menu</h2>
//             {/* <ul>
//                 <li>Biryani</li>
//                 <li>Burger</li>
//                 <li>Diet Coke</li>
//             </ul> */}
//             <ul>
//   {itemCards && itemCards.length > 0 ? (
//     itemCards.map((item, index) => (
//       <li key={index}>{item.card?.info?.name}</li>
//     ))
//   ) : (
//     <li>No items available</li>
//   )}
// </ul>

//         </div>

        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(" , ")} - {costForTwoMessage}
            </p>
 
            {/* categories accodians*/}
            {categories.map((category, index) => (
                //controlled components
                <RestaurantCategory
                key={category?.card?.card.title} 
                data={category?.card?.card}

                showItems={index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                dummy = {dummy}
                />
            ))}

            {/* {categories?.map((category, index) => (
               <RestaurantCategory
                 key={category.card.card.title || index} // Preferably use a unique value
                 data={category.card.card}
                />
            ))} */}

         

        </div>
    );
}

export default RestaurantMenu;


