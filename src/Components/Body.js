import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";



const Body = () => {
    const [listOfRestarants , setlistOfRestaurants] = useState([]);
    const [filteredRestaurant , setfilteredRestaurant] = useState([]);
    // console.log(filteredRestaurant);
    const [inputValue,setInputValue] = useState(""); 
    useEffect(()=>{
        fetchdata()
    },[]);
    const fetchdata = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const jsonData = await data.json();
        setlistOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return listOfRestarants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="search">
                <input className="search-input" type="text" value = {inputValue.toLowerCase()} onChange={ (e)=>{
                    setInputValue(e.target.value);
                }}/>
                <button className="search-button" onClick={ ()=> {
                    const filteredList = listOfRestarants.filter( res => res.info.name.toLowerCase().includes(inputValue));
                    setfilteredRestaurant(filteredList);
                }}>Search</button>
            </div>

            <div>
                <button className="filter-button" onClick = { () => {
                   const filteredList   = listOfRestarants.filter ( 
                        (restaurant) =>  restaurant.info.avgRating > 4 
                    );
                    setfilteredRestaurant(filteredList)

                }}>Top Rated</button>
            </div>

            <div className="restaurant-container">

               {
                filteredRestaurant.map( restaurant => < ResCard key = {restaurant.info.id} resData = {restaurant}/>)
               }
            </div>


        </div>
    )
};
export default Body;