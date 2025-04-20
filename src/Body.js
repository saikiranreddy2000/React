import Rescard from "./Rescard";
import { useNetworkStatus } from "../asserts/useNetworkStatus";
import { useState } from "react";
import { Shimmer } from "./Shimmer";

import { useGetRestaurents } from "../asserts/useGetRestaurents";
import { Promoted } from "./Promotedtag";
export const Bodytemplate = () => {
  const [accordian, setAccordian] = useState(true);
  const [searchValue, setsearchValue] = useState();
  const { listofRestaurents, filteredRestaurents, setfilteredRestaurent } =
    useGetRestaurents();
  const Promotedtag = Promoted(Rescard);
  if (!useNetworkStatus()) {
    return <p>you have a network issue. once check your internet😒</p>;
  }
  return (
    <div className="pt-5">
      <div className=" flex justify-center">
        <input
          className="border-2 border-black rounded"
          type="text"
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setfilteredRestaurent(listofRestaurents);
          }}
        >
          🔄️
        </button>
        <button
          className="bg-green-200 p-2 mx-2 rounded-lg hover:bg-green-300 hover:text-white font-bold"
          onClick={() => {
            if (searchValue != "") {
              const filterlist = listofRestaurents?.filter((x) => {
                return x.info.name
                  .toLowerCase()
                  ?.includes(searchValue?.toLowerCase());
              });
              setfilteredRestaurent(filterlist);
            } else {
            }
          }}
        >
          search
        </button>
        <button
          className="bg-green-200 p-2 mx-2 rounded-lg hover:bg-green-300 hover:text-white font-bold"
          onClick={() => {
            const filterlist = listofRestaurents.filter(
              (restaurant) => restaurant.info.avgRating > 4.2
            );
            setfilteredRestaurent(filterlist);
          }}
        >
          top restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurents.length == 0 ? (
          <Shimmer />
        ) : (
          filteredRestaurents?.map((restaurant, index) => (
            <div key={index}>
              {restaurant.info.cuisines.includes("Chinese") ? (
                <Promotedtag
                  resData={restaurant}
                  showItem={index === accordian && true}
                  setAccordianvalue={  () => {
                    accordian == index ? setAccordian() : setAccordian(index);
                  }}
                />
              ) : (
                <Rescard  
                  resData={restaurant}
                  showItem={index === accordian && true}
                  setAccordianvalue={() => {
                    accordian == index ? setAccordian() : setAccordian(index);
                  }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
