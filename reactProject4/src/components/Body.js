import ResCard from  "./ResCard.js"
//same directory components
import resObj from  "../utils/mockData"
import { useState } from "react";
//other directory utils

const Body = ()=>{
    const [newResList,setNewResList] = useState(resObj);

    return(
        <div className="body">
            <div className="filter">
                <button className = "filter-btn" onClick={()=>{
                    let filteredList = newResList.filter((res)=>res.info.avgRating > 4.2);
                    setNewResList(filteredList);
                }}>
                    Top rated restraunts
                </button>
            </div>
            <div className="cardsContainer">
                {
                    newResList.map((restaurant) => <ResCard key = {restaurant.info.id} resData = {restaurant}/>)
                    //never use indexes as keys it is okay but not recommended
                    //unique id as key >>>>>> use idx as key >>> not putting keys
                        //resObj.map((restaurant,index) => <ResCard key = {index} resData = {restaurant}/>)
                        //resObj.map((restaurant) => <ResCard resData = {restaurant}/>)
                }

                {/* instead of this we can use for loop or map() func as above
                 <ResCard resData = {resObj[0]} /> 
                <ResCard resData = {resObj[1]} /> 
                <ResCard resData = {resObj[2]} /> 
                <ResCard resData = {resObj[3]} /> 
                <ResCard resData = {resObj[4]} /> 
                <ResCard resData = {resObj[5]} /> 
                <ResCard resData = {resObj[6]} /> 
                <ResCard resData = {resObj[7]} /> 
                <ResCard resData = {resObj[8]} /> 
                <ResCard resData = {resObj[9]} /> 
                <ResCard resData = {resObj[10]} /> 
                <ResCard resData = {resObj[11]} /> 
                <ResCard resData = {resObj[12]} /> 
                <ResCard resData = {resObj[13]} /> 
                <ResCard resData = {resObj[14]} /> 
                <ResCard resData = {resObj[15]} /> 
                <ResCard resData = {resObj[16]} /> 
                <ResCard resData = {resObj[17]} /> 
                <ResCard resData = {resObj[18]} /> 
                <ResCard resData = {resObj[19]} />  */}
 
                
            </div>
        </div>
    );
}



export default Body;