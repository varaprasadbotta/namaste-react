import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfApi, setFilteredListOfApi] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await response.json();
    const dataFromApi = json.data.cards;
    let updatedata = dataFromApi.slice(3);
    setListOfRestaurant(updatedata);
    setFilteredListOfApi(updatedata);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>looks like your are in offline</h1>;

  if (listOfRestaurant.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="Body">
      <div className="filter">
        <div className="SearchBarContainer">
          <input
            className="searchBar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              let filteredListOfSearch = listOfRestaurant.filter((res) => {
                {
                  return res.card.card.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              });
              setFilteredListOfApi(filteredListOfSearch);
            }}
          >
            search
          </button>
        </div>
        <button
          className="TopRatedRestaurnat"
          onClick={() => {
            let filteredList = listOfRestaurant.filter((res) => {
              return res?.card?.card?.info?.avgRating > 4.3;
            });
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="Res-Container">
        {filteredListOfApi.map((restaurant) => {
          return (
            <Link
              key={restaurant?.card?.card?.info?.id}
              to={"/RestaurantMenu/" + restaurant?.card?.card?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
