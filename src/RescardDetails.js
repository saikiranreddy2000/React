import { Link } from "react-router-dom";

export const RescardDetails = ({ data }) => {
  console.log("rescarddeatial", data.info);
  const { cuisines, avgRating, locality, id,
  } = data.info;
  // console.log(id);
  const { deliveryTime } = data.info.sla;
  return (
    <div>
      <p>Cuisines: {cuisines.join(", ")}</p>
      <p>Average Rating:⭐{avgRating}</p>
      <p>Address: {locality}</p>
      <p>Delivery Time: {deliveryTime}</p>
      <div className="flex justify-center">
        <Link key={id} to={"/Restaurant/" + id}>
          <button className=" bg-green-200 p-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white">
            order now
          </button>
        </Link>
      </div>
    </div>
  );
};
