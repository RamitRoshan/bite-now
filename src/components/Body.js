import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// for geeting one particular output(here we'll get all restaurant)
const Body = () => {

    //Local State Variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

 

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
