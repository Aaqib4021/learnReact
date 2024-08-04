const RestaurantMenuitems = (props) => {
  const { item } = props;
  //   console.log(item);
  return (
    <div>
      <div>
        {item.map((currentItem) => (
          <div className=" my-4 border-b-2 text-left border-black cursor-pointer">
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
                className="max-w-40 rounded-lg mt-[-30px] mb-8 "
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${currentItem.card.info.imageId}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenuitems;
