import {CDN_IMG_URL} from  "../utils/constants"


const ResCard = (props)=>{
    const {resData} = props;
    //destructuring
    const {name , cuisines , cloudinaryImageId , avgRating , costForTwo} = resData?.info; // option chaining with '?'
    return(
        <div className="resCard">

            <img className="res-img" src={CDN_IMG_URL+cloudinaryImageId}/>
            <h3 className="restName">{name}</h3> 
            <h6 className="cuisines">{cuisines.join(" ")}</h6>
            <h6 className="rating">{avgRating}</h6>
            <h6 className="cost4two">{costForTwo}</h6>
            
        </div>
    );
}

export default ResCard;