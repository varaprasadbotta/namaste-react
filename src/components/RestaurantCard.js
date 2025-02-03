import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.card.card.info;
  return (
    <div className="RestaurantCard">
      <img
        className="Card-image"
        alt="dish pic"
        src={
          CDN_LINK +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;