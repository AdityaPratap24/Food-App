import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect,useContext } from "react";
import Ui from "./Shimmer";
import { Link } from "react-router-dom";
import Error from "./Error";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { FETCH_SWIGGY_URL } from "../config";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      FETCH_SWIGGY_URL
    );
    const json = await data?.json();
    console.log(json);

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return <h1>Sorry, you are offline</h1>
  }

  // if (filteredRestaurants?.length == 0) {
  //   return <h1>No restaurant found</h1>
  // }

  // conditional rendering
  // if restaurants size is empty use Shimeer UI else use actual data ui

  //not render component (early return)
  if(!allRestaurants){
    return null;
  }

  return allRestaurants?.length == 0 ? (
    <Ui />
  ) : (
    <>
      <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-between">
        <input
          type="text"
          className="focus:bg-green-50 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="p-2 m-2 bg-purple-800 hover:bg-pink-900 text-white rounded-lg"
          onClick={() => {
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* <input value={user.name} className="p-2 m-2 text-sky-500 rounded-lg font-black" 
        onChange={(e) => (setUser({
          name: e.target.value,
          email: "pratap@gmail.com",
        }))} /> */}
      </div>
      <div className="m-auto w-4/5 flex flex-wrap gap-6 justify-between bg-pink-50 ">
        {filteredRestaurants?.length == 0 ? (
          <p className="text-center w-full text-3xl">
           No restaurant found...
          </p>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                <div className="border-1 h-full hover:shadow-lg hover:shadow-pink-500 transition duration-0 hover:duration-450">
                      <RestrauntCard {...restaurant.data} />
                </div>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
// ...spread operator

export default Body;
