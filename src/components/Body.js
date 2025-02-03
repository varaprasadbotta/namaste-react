import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="Res-Container">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
