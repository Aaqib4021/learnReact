import ResCard, { OpenRestaurant } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import { useContext } from "react";
import userContext from "../utils/UserContext";

const Body = () => {
  const [
    listOfRestarants,
    filteredRestaurant,
    setfilteredRestaurant,
    inputValue,
    setInputValue,
  ] = useRestaurants();

  // console.log(listOfRestarants);
  const OpenRestaurantCard = OpenRestaurant(ResCard);
  // console.log(userContext);
  const { setuserName, LoggedUser } = useContext(userContext);

  return listOfRestarants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="flex justify-center gap-4 ">
        <input
          data-testid="searchInput"
          className="rounded-lg px-8 py-3 focus:bg-gray-200 "
          type="text"
          placeholder="Search"
          value={inputValue.toLowerCase()}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          className="w-24 bg-blue-500 rounded-full text-white "
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

      <button
        className="bg-emerald-600 m-4 px-5 py-2 rounded-lg text-white  "
        onClick={() => {
          const filteredList = listOfRestarants.filter(
            (restaurant) => restaurant.info.avgRating > 4
          );
          setfilteredRestaurant(filteredList);
        }}
      >
        Top Rated
      </button>

      <div>
        <label>UserName:</label>
        <input
          type="text"
          className="border border-black mb-4 p-2"
          value={LoggedUser}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
      </div>
      <div className=" flex flex-wrap justify-around mb-24 ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <OpenRestaurantCard resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
