import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// for geeting one particular output(here we'll get all restaurant)
const Body = () => {

    let listOfRestaurants = [
 {
    "info": {
      "id": "23678",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/566bfcc0-c4f0-4d1b-816c-45405033b9fb_23678 - Copy (10).jpg",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "65K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      } 
    },
    "info": {
      "id": "2678",
      "name": "MCD",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/566bfcc0-c4f0-4d1b-816c-45405033b9fb_23678 - Copy (10).jpg",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.9,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "65K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      } 
    }  
  },
];

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn" 
          //even listener - with call back fn
          onClick={() => {
            // to get restaurant more rating than 4.5, we use filter logic here
            listOfRestaurants = listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRating) >4.5
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {/* //using map to show the restaurant(can use for loop also), instead of writing individual code */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
