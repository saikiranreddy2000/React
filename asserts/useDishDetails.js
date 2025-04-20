import {RestaurantFetch } from "../asserts/constants"
import { useState,useEffect } from "react";
export const useDishDetails=(Id)=>{
    const [resdetails, setresdetails] = useState(null);
    useEffect(() => {
        fetchResData(Id);
      }, []);
    
      const fetchResData = async () => {
        const data = await fetch(RestaurantFetch + Id);
        const json = await data.json();
        console.log(json.data);
        setresdetails(json.data);
      };
    return resdetails;
}