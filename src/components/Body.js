import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

 
const Body = () => {


  // Always call custom hooks at the top
  const onlineStatus = useOnlineStatus(); 

  //Local State Variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //Another state variables only for filtered
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //empty i.e will give in the form of list(array)

  //bind my variable with input box(type in search)
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered", listOfRestaurants);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(   
      "https://namastedev.com/api/v1/listRestaurants"
      // "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnamastedev.com%2Fapi%2Fv1%2FlistRestaurants"
    );
    


    //once we have data, then we have to convert it into JSON
    const json = await data.json();
    console.log(json);
 
    //Optional Chaining(?.)
    // const restaurants =
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle ?.restaurants || [];

    const restaurants =
    json?.data?.data?.cards
      ?.find(
        (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    //getting ID of restaurants
    console.log(restaurants.map(r => r.info.id));
  
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);  
  };

  //when online status is false
  if(onlineStatus === false)
    return (
      <h1>
        oops you're offline😥!! Please check your internet connection.
      </h1>
    );

  //using ternary operator(? :) - conditional rendering
  return listOfRestaurants.length === 0 ? ( <Shimmer/> ) : (
   
   <div className="body">

      <div className="filter flex">

        <div className="search m-4 p-4">
          <input 
            type="text" 
            placeholder="Enter your fav dish"
            className=" border border-solid border-black" 
            value={searchText}
            //e- event 
            onChange={(e)=> { setSearchText(e.target.value)}}
          />
          <button className="px-4 py-2 rounded-3xl hover:bg-green-900 bg-green-500 m-3"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter(
                //even we type in rendom order or capital , small it will search here we use .toLowerCase()
                (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >Search</button>
        </div>

        <div className="m-4 p-4 flex items-center">
        <button 
          className="px-4 py-2 bg-gray-400 rounded-lg hover:bg-white" 
          //even listener(onClick) - with call back fn
          onClick={() => {
            // to get restaurant more rating than 4.5, we use filter logic here
            const filteredList = listOfRestaurants.filter(
                (res) => parseFloat(res.info.avgRating) >4.4
            );
            //update state variable
            // setListOfRestaurants(filteredList);
            setFilteredRestaurant(filteredList);
          }}

          
        >
          Top Rated Restaurant
        </button>
        </div>

      </div>


      <div className="flex flex-wrap">
        {/* //using map to show the restaurant(can use for loop also), instead of writing individual code */}
        {filteredRestaurant.map((restaurant) => (
          //Key should be in parent JSX
          <Link 
            key={restaurant.info.id} 
            to={"/restaurants/" + restaurant.info.id}
          >
            {/*if the restaurant is promoted then add a promoted label to it i.e if-else */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
            
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Body;
