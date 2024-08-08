import { useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCatogory from "./ResCatogory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId } = resInfo.cards[2].card.card.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    <div className="text-center ">
      <img
        className=" max-w-20 relative left-[47%] rounded-xl "
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-bold text-3xl my-2">{name}</h1>
      <p className="font-semibold mb-2">{cuisines.join(",")}</p>
      {categories.map((item, index) => (
        <ResCatogory
          key={index}
          data={item.card.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index === showIndex ? null : index)}
          index={index}
          showIndex={showIndex}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
