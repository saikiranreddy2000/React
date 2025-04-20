import { useState } from "react";
import { CDN_SWIGGY } from "../asserts/constants";
import { RescardDetails } from "./RescardDetails";
const Rescard = ({ resData, showItem, setAccordianvalue }) => {
  const { name, cloudinaryImageId } = resData.info;
  return (
    <div className="w-60 m-3 p-2 bg-gray-100 rounded hover:bg-gray-200  flex">
      <div
        className="cursor-pointer "
        onClick={() => {
          setAccordianvalue();
        }}
      >
        <img
          className="rounded hover:border-10 w-60 h-40"
          src={CDN_SWIGGY + cloudinaryImageId}
        />
        <h3 className="font-bold flex justify-center">{name}</h3>
        {showItem ? <RescardDetails data={resData} /> : ""}
      </div>
    </div>
  );
};
export default Rescard;
