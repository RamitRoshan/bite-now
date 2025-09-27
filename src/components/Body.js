import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// for geeting one particular output(here we'll get all restaurant)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">     
        
          {/* //using map to show the restaurant(can use for loop also), instead of writing individual code */}
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))};
      </div>
    </div>
  );
};

export default Body;