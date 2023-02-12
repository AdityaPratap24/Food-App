import {IMG_CDN_URL} from "../config";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
  }) => {
    return (
      <div className="p-4 w-80 ">
        <img
          src={
            IMG_CDN_URL + cloudinaryImageId
          }
        />
        <div className="pt-3 text-lg font-bold">{name}</div>
        <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
        <h4>{lastMileTravelString} distance</h4>
      </div>
    );
  };

  export default RestrauntCard;