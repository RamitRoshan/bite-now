import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);


    // we somehow fetch the data, then somehow  we return restaurantInformation.
    //fetching data once
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        //convert data to json
        const json = await data.json();
        setResInfo(json.data);
    }

    //it's job is to return restaurant information
    return resInfo;
}

export default useRestaurantMenu;