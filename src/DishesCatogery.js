
import Dishes from "./Dishes";


const DishesCatogery = (props) => {
  const { data, showItems, setShowIndex } = props;
  //console.log(data.card.card);
  return (
    <div className="w-6/12 m-auto my-2 bg-slate-100">
      <div>
        <div
          className="flex justify-between p-2 cursor-pointer shadow-lg"
          onClick={() => {
            setShowIndex();
          }}
        >
          <span className="font-bold">
            {data.card.card.title}({data.card.card.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {showItems &&
            data?.card?.card?.itemCards?.map((x) => {
              return <Dishes dishData={x.card.info} key={x.card.info.id} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default DishesCatogery;
