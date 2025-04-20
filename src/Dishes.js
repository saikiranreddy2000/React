import { useDispatch } from "react-redux";
import { CDN_SWIGGY } from "../asserts/constants";
import { addItem } from "../asserts/cartSlice";

const Dishes = ({ dishData }) => {
  //console.log(dishData);
  const dispatch = useDispatch();
  const dishAdd = (data) => {
    dispatch(addItem(data));
  };
  return (
    <div className="flex justify-between p-2" key={dishData.id}>
      <div className="text-left w-8/12">
        <div className="font-medium">
          {dishData.name}--
          {dishData.price ? (dishData.price/100) : (dishData.defaultPrice/100)}
        </div>
        <div className="text-xs">{dishData.description}</div>
      </div>
      <div className="w-4/12">
        <button
          className="bg-green-900 absolute text-cyan-50 p-1 shadow-lg flex align-end"
          onClick={() => dishAdd(dishData)}
        >
          Add+
        </button>
        <img className="" src={CDN_SWIGGY + dishData.imageId} />
      </div>
    </div>
  );
};
export default Dishes;
