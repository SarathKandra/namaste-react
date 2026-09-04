const ResturantCard = (props) => {
  const {resData} = props;

  const {name, imageUrl, cuisines, avgRating, deliveryTime, costForTwo } = resData;
return(
  <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
    <img className="res-logo" src={imageUrl} />
    <h3>{name}</h3>
    <h4>{cuisines.join(", ")}</h4>
    <h4>{costForTwo}</h4>
    <h4>{avgRating} Rating</h4>
    <h4>{deliveryTime} minutes</h4>
  </div>
)
}

export default ResturantCard;
