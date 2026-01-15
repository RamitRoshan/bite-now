import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // destructuring data
  const {resData} = props;
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
    </div>
  );


};

export default RestaurantCard;