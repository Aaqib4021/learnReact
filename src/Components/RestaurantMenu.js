
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId); 
  // console.log(resInfo);

  if(resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <img src={CDN_URL + cloudinaryImageId} />
      <p>{cuisines.join(",")}</p>
      <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
          ;
        </ul>
    </div>  
  );
};
export default RestaurantMenu;
