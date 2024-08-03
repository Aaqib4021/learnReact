import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [
    listOfRestarants,
    filteredRestaurant,
    setfilteredRestaurant,
    inputValue,
    setInputValue,
  ] = useRestaurants();

  console.log(listOfRestarants);

  return listOfRestarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          type="text"
          value={inputValue.toLowerCase()}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const filteredList = listOfRestarants.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue)
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div>
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestarants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setfilteredRestaurant(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
