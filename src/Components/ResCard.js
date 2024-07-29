import { CDN_URL } from "../utils/constants";
//*restaurant card
const ResCard = (props) => {
    const {resData} = props;
  
    const {cloudinaryImageId,name,cuisines,avgRating, sla:{deliveryTime} } = resData?.info
  
      return (
          <div className = "rescard">
              <img 
              className="res-image"
              src={CDN_URL + cloudinaryImageId}
              />
              <h3>{name}</h3>
              <h4>{cuisines}</h4>
              <h4>&#9733; {avgRating}</h4>
              <h4>{deliveryTime} mins</h4>
          </div>
  
      )
  }
export default ResCard;