import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCatogory from "./ResCatogory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, cloudinaryImageId } = resInfo.cards[2].card.card.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        item.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center ">
      <img
        className=" max-w-20 relative left-[47%] rounded-xl "
        src={CDN_URL + cloudinaryImageId}
      />
      <h1 className="font-bold text-3xl my-2">{name}</h1>
      <p className="font-semibold mb-2">{cuisines.join(",")}</p>
      {categories.map((item) => (
        <ResCatogory key={item.card.card.div} data={item.card.card} />
      ))}
    </div>
  );
};
export default RestaurantMenu;
