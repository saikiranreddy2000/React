import Rescard from "./Rescard";

export const Promoted = (Rescard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black p-2 m-2 text-white rounded-lg">Chinese</label>
        <Rescard {...props} />
      </div>
    );
  };
};
