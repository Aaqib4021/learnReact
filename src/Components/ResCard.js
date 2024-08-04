import { CDN_URL } from "../utils/constants";
//*restaurant card
const ResCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="w-80 h-[450px]  p-4 rounded-lg hover:scale-95">
      <img
        className="w-64 h-64 mb-4 object-cover rounded-[20px] "
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-semibold ">{name}</h3>
      <h4 className="break-all font-semibold  ">{cuisines.join(",")}</h4>
      <h4 className="font-semibold text-green-700 ">&#9733; {avgRating}</h4>
      <h4 className="font-semibold  ">{deliveryTime} mins</h4>
    </div>
  );
};

export const OpenRestaurant = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-zinc-900 px-4 py-1 rounded-md text-white ">
          Open
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
