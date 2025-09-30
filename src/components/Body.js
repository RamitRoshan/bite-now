import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";

// for geeting one particular output(here we'll get all restaurant)
const Body = () => {

    //Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9352403%26lng%3D77.624532%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    //once we have data, then we have to convert it into JSON
    const json = await data.json();
    console.log(json);

    // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants || []);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfRestaurants(restaurants);
  };


  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          //even listener - with call back fn
          onClick={() => {
            // to get restaurant more rating than 4.5, we use filter logic here
            const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRating) >4.2
            );
            //update state variable
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* //using map to show the restaurant(can use for loop also), instead of writing individual code */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
