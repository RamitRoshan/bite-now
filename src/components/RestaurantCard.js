const RestaurantCard = (props) => {
  // destructuring data
  const {resData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla: {slaString}} = resData?.info; 
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo"
      alt="res-logo" 
      src={ + cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating: {avgRating}⭐</h4>
      <h4>Cost: {costForTwo}</h4>
      <h4>Delivery: {slaString}</h4>
    </div>
  );
};

export default RestaurantCard;