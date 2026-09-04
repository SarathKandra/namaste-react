import { resList } from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
      {resList.map((restaurant) => (
        <ResturantCard key={restaurant.id} resData={restaurant} />
      ))}
      </div>
    </div>
  )
}

export default Body;
