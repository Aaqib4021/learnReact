import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurants = () => {
  const [inputValue, setInputValue] = useState("");
  const [listOfRestarants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const jsonData = await data.json();
    setlistOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return [
    listOfRestarants,
    filteredRestaurant,
    setfilteredRestaurant,
    inputValue,
    setInputValue,
  ];
};
export default useRestaurants;
