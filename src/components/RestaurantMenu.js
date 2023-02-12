import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Ui from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dispath = useDispatch();

  const handleAddItem = (item) => {
    dispath(addItem(item));
  };

  const restaurant = useRestaurant(resId);

  return !restaurant ? (
    <Ui />
  ) : (
    <div className="bg-[#3C4852] text-white py-8 mb-5">
      <div className="m-auto w-4/5 flex justify-evenly items-center gap-5">
        <img
          className="w-96"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        />
      </div>
      <div className="w-3/3 flex">
        {/* <h1>Restaurant Id : {resId}</h1> */}
        <h3 className="text-4xl pb-2 m-auto w-1/5 flex gap-5 text-pink-400">
          {" "}
          {restaurant.area + ", " + restaurant.city}
        </h3>
        <h3 className="text-4xl pb-2 m-auto w-1/5 flex gap-5 text-pink-400">
          {" "}
          {restaurant.avgRating} stars
        </h3>
      </div>
      <div>
        <h1 className="text-3xl pb-2 m-auto w-1/5 flex gap-5 text-pink-400">
          Menu
        </h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => {
            return (
              <div className="m-auto w-4/5 flex gap-5" key={item.id}>
                {item?.cloudinaryImageId === "" ||
                !item?.cloudinaryImageId ? null : (
                  <div>
                    <div>
                      <p className="font-bold text-2xl text-green-500">{item?.name}</p>
                      <div className="item-image">
                        <img src={IMG_CDN_URL + item?.cloudinaryImageId} />
                      </div>
                      <button
                        className="p-3 m-2 text-green-400 bg-[#765009]"
                        onClick={() => handleAddItem(item)}
                      >
                        Click to add cart
                      </button>
                      <p className="text-1xl text-green-300 m-4">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
