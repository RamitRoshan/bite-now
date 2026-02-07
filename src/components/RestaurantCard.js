import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // destructuring data
  const {resData} = props;
  //console.log(resData);

  const {loggedInUser} = useContext(UserContext);

  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla: {slaString}} = resData?.info; 
  
  
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-50 hover:bg-gray-100">
      <img 
      className="rounded-lg"
      alt="res-logo" 
      src={ CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}⭐</h4>
      <h4>Cost: {costForTwo}</h4>
      <h4>Delivery: {slaString}</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component
//Input - RestaurantCard => RestaurantCardPromoted
//withPromotedLabel -> higher order fn, it takes restaurant card as input
export const withPromotedLabel = (RestaurantCard) => {
  //functional component (return new component)
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
          Promoted
        </label>
        <RestaurantCard {...props}/>
      </div>
    )  
  }
}

export default RestaurantCard;