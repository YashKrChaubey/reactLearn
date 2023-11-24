import ResCard from  "./ResCard.js"
//same directory components
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer.js";
//other directory utils


const Body = ()=>{
    const [searchText,setSearchText] = useState("");
    const [newResList,setNewResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);

    useEffect(()=>{
        fetchData();
        
    },[]);

    const fetchData = async () =>{
        const webdata = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4914883&lng=73.82172899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const jsonData = await webdata.json();

        setNewResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(newResList.length === 0){
        return(<Shimmer/>)
    }

    return(
        <div className="body">
            <div className="filter">
                <div>
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                        console.log(searchText);
                        let filteredList = newResList.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredResList(filteredList);
                    }}>Search</button>
                </div>
                <button className = "filter-btn" onClick={()=>{
                    let filteredList = newResList.filter((res)=>res?.info?.avgRating > 4.2);
                    setFilteredResList(filteredList);
                }}>
                    Top rated restraunts
                </button>
            </div>
            <div className="cardsContainer">
                {
                    filteredResList.map((restaurant) => <ResCard key = {restaurant?.info?.id} resData = {restaurant}/>)
                    //never use indexes as keys it is okay but not recommended
                    //unique id as key >>>>>> use idx as key >>> not putting keys
                        //resObj.map((restaurant,index) => <ResCard key = {index} resData = {restaurant}/>)
                        //resObj.map((restaurant) => <ResCard resData = {restaurant}/>)
                }

            </div>
        </div>
    );
}



export default Body;