import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();
  //   console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setresInfo(jsonData.data);
    console.log(resInfo);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards);

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
