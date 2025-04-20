import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DishesCatogery from "./DishesCatogery";
import { useDishDetails } from "../asserts/useDishDetails";
import { Shimmercat } from "./Shimmercat";
const RestaurantDetails = () => {
  const { resId } = useParams();
  const resdetails = useDishDetails(resId);
  //console.log("resdetails",resdetails)
  const [showIndex, setShowIndex] = useState();
  if (resdetails === null) return <Shimmercat />;
  const { name, city } = resdetails?.cards[2]?.card?.card?.info;
  const category =
    resdetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) => {
        return (
          x?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  //console.log("dishses", category);
  return (
    <div>
      <div className="text-center">
        <div className="text-lg font-bold">{name}</div>
        <div>{city}</div>
        {category?.map((dishse, index) => {
          return (
            <DishesCatogery
              key={index}
              data={dishse}
              showItems={index === showIndex && true}
              setShowIndex={() => {
                //console.log("Showindex", showIndex, "index", index);
                index !== showIndex ? setShowIndex(index) : setShowIndex();
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantDetails;
