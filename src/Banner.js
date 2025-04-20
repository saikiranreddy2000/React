import { useParams } from "react-router-dom";
import { CDN_SWIGGY } from "../asserts/constants";

const Banner = ({ value }) => {
  const {imageId,id}=value
  const param=useParams();
  console.log(param)
  return (
  <img src={CDN_SWIGGY+imageId}/>
  );
};
export default Banner;
