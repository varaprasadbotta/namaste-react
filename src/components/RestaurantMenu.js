import useRestaurantInfo from "../utils/useRestaurantInfo";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantInfo(resId);

  if (resMenu === null) return <ShimmerUI />;

  const arrDes = resMenu?.data?.cards[0]?.card?.card || {};
  const { text } = arrDes;
  const arrDesForRemaing = resMenu?.data?.cards[2]?.card?.card?.info || {};
  const { areaName, avgRating, costForTwoMessage } = arrDesForRemaing;

  return (
    <div className="ResMenu">
      <h1>{text}</h1>
      <h3>{areaName}</h3>
      <h3>avgRating {avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
    </div>
  );
};
export default RestaurantMenu;
