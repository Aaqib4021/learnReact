import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuitems = (props) => {
  const { item } = props;
  // console.log(item);
  const dispatch = useDispatch();

  const handleAddItem = (currentItem) => {
    dispatch(addItem(currentItem));
  };

  return (
    <div>
      <div>
        {item.map((currentItem, index) => (
          <div
            key={index}
            className=" my-4 border-b-2 text-left border-black cursor-pointer"
          >
            <div className=" text-lg flex flex-col ">
              <span className="font-semibold text-orange-950 ">
                {currentItem.card.info.name}
              </span>
              <span className="font-bold mb-4 ">
                ₹{" "}
                {currentItem.card.info.price / 100 ||
                  currentItem.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="flex justify-between ">
              <p className="text-xs mb-2">
                {currentItem.card.info.description}
              </p>
              <img
                className="max-w-40 rounded-lg mt-[-30px]"
                src={CDN_URL + currentItem.card.info.imageId}
              />
            </div>

            <button
              className="text-green-900 py-1 px-4 rounded-xl shadow-lg border-2 border-white-900 relative left-[86%] top-[-20px]  mb-8 bg-white font-bold "
              onClick={() => handleAddItem(currentItem)}
            >
              ADD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuitems;
