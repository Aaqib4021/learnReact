import { useState } from "react";
import RestaurantMenuitems from "./RestaurantMenuItems";

const ResCatogory = (props) => {
  const { data, showItems, setshowIndex } = props;
  const { title } = data;
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div>
      <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-xl p-4 ">
        <div
          className=" text-xl font-bold flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>{title}</span>
          {showItems ? <button>🔼</button> : <button>🔽</button>}
        </div>

        {showItems && <RestaurantMenuitems item={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResCatogory;
