import RestaurantMenuitems from "./RestaurantMenuItems";
const ResCatogory = (props) => {
  const { data } = props;
//   console.log(data);
  const { title } = data;

  return (
    <div>
      <div className=" w-6/12 mx-auto my-4   bg-gray-50 shadow-xl p-4   ">
        <div className=" text-xl font-bold flex justify-between">
          <span>{title}</span>
          <button>🔽</button>
        </div>
        <RestaurantMenuitems item={data.itemCards || data.categories[0].itemCards} />
      </div>
    </div>
  );
};
export default ResCatogory;
