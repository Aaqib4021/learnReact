import { useState } from "react";
import ResCard from "./ResCard";
import resList from '../utils/mockdata'


const Body = ()=> {
    const [listOfRestarants,setlistOfRestaurants] = useState(resList);
    return (
        <div className="body">

            <div>
                <button className="filter-button" onClick = { () => {
                   const filteredList  = listOfRestarants.filter ( 
                        (restaurant) =>  restaurant.info.avgRating > 4 
                    );
                    setlistOfRestaurants(filteredList)
                    console.log(filteredList);
                    console.log(listOfRestarants);
                }}>Top Rated</button>
            </div>

            <div className="restaurant-container">

               {
                listOfRestarants.map( restaurant => < ResCard key = {restaurant.info.id} resData = {restaurant}/>)
               }
            </div>


        </div>
    )
};
export default Body;