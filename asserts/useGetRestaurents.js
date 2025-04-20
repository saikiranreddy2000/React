import { useEffect,useState } from "react";
import { SWIGGY_API } from "./constants";

export const useGetRestaurents = () => {
  const [listofRestaurents, setRestaurent] = useState([]);
  const [filteredRestaurents, setfilteredRestaurent] =
  useState(listofRestaurents);
  useEffect(() => {
    fetching();
  }, []);
  const fetching = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setRestaurent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurent(
        json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };
  return {listofRestaurents,filteredRestaurents,setfilteredRestaurent};
};
