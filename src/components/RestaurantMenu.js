import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  if (resMenu.length === null) return <ShimmerUI />;

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        resId +
        "&catalog_qa=undefined&query=Biryani"
    );
    const json = await data.json();
    setResMenu(json);
  };
  const arrDes = resMenu?.data?.cards[0]?.card?.card || {};
  const { text } = arrDes;
  const arrDesForRemaing = resMenu?.data?.cards[2]?.card?.card?.info || {};
  const { areaName, avgRating, costForTwoMessage, cuisines } = arrDesForRemaing;
  //   const { itemCardsMenu } =
  //     resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  //  console.log(itemCardsMenu)

  return (
    <div className="ResMenu">
      <h1>{text}</h1>
      <h3>{areaName}</h3>
      <h3>avgRating {avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      {/* <h3>{cuisines.join(", ") || "No cuisines available"}</h3> */}
      <h2>Menu</h2>
      {/* for items = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards*/}
      {/* <ul>
        {itemCardsMenu.map((item) =>  (
            <li>{item.card.card.info.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;
