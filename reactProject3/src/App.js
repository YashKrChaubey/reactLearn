import React from "react";
import ReactDOM from "react-dom/client";

//App Container parent
    //Header :-
        //logo
        //nav items
    //Body :-
        //search
        //card Container
            //restaurants container
                //restaurant card
                    //name
                    //rating
                    //time to deliver
                    //Avg. cost for 2 people
    //Footer :-    
        //social links


const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img className="logoImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarbFGOA8xl_IGcaB291JF16ZfgqEnfC5OxZn9xRFS&s"/>
            </div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Restaurants</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="cart">
                <img className="cartImg" src="https://cdn3.vectorstock.com/i/1000x1000/62/87/flat-design-shopping-cart-vector-13576287.jpg"/>
            </div>
        </div>
    )
}        


const ResCard = (props)=>{
    const {resData} = props;
    //destructuring
    const {name , cuisines , cloudinaryImageId , avgRating , costForTwo} = resData?.info; // option chaining with '?'
    return(
        <div className="resCard">

            <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3 className="restName">{name}</h3> 
            <h6 className="cuisines">{cuisines.join(" ")}</h6>
            <h6 className="rating">{avgRating}</h6>
            <h6 className="cost4two">{costForTwo}</h6>
            
        </div>
    );
}


const Body = ()=>{
    return(
        <div className="body">
            <div className="searchBar">
                <p>search bar</p>
            </div>
            <div className="cardsContainer">
                {
                    resObj.map((restaurant) => <ResCard key = {restaurant.info.id} resData = {restaurant}/>)
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


const Footer =()=>{         //footer component
    return(
        <div>
            <h3>I am footer</h3>
        </div>
    );
}


const AppLayout = () =>{        //main app component
    return(
        <div id = "parentContainer" className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//root react element which is reference to root div of the HTML document/DOM element.

//root.render(heading3);               //syntax to render a react element

//the ReactDOM renders react heading element inside root element of DOM/HTML as HTML

root.render(<AppLayout/>);      //-> syntax to render a react component

const resObj = [
    {
    "info": {
    "id": "23722",
    "name": "McDonald's",
    "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
    "locality": "Kothrud",
    "areaName": "Kothrud",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.4,
    "feeDetails": {
    "restaurantId": "23722",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 02:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-kothrud-pune-23722",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "16059",
    "name": "KFC",
    "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
    "locality": "Karve Road",
    "areaName": "Erandwane",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "16059",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4900
    },
    "parentId": "547",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "24 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-karve-road-erandwane-pune-16059",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "14548",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Paud Road",
    "areaName": "Kothrud",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "14548",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 06:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-paud-road-kothrud-pune-14548",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "36195",
    "name": "Barometer",
    "cloudinaryImageId": "viarm2l1c1ftafduz3bj",
    "locality": "Kothrud",
    "areaName": "Kothrud",
    "costForTwo": "₹1100 for two",
    "cuisines": [
    "Indian",
    "Chinese",
    "Continental",
    "Pan-Asian"
    ],
    "avgRating": 4.6,
    "feeDetails": {
    "restaurantId": "36195",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "42013",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:30:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/barometer-kothrud-pune-36195",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "152984",
    "name": "Oye Kiddan",
    "cloudinaryImageId": "usahf2gbff2ybnfnik9n",
    "locality": "Bharati Nagar",
    "areaName": "Kothrud",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Punjabi",
    "North Indian",
    "Desserts",
    "Thalis"
    ],
    "avgRating": 4.1,
    "feeDetails": {
    "restaurantId": "152984",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "690",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 3.9,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "3.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 15:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/oye-kiddan-bharati-nagar-kothrud-pune-152984",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "21395",
    "name": "Brahma Garden",
    "cloudinaryImageId": "uvltlhppkqfium1fpuay",
    "locality": "Manik Baug",
    "areaName": "Sinhgad Road",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "North Indian",
    "South Indian",
    "Chinese",
    "Juices",
    "Biryani",
    "Punjabi"
    ],
    "avgRating": 4.3,
    "veg": true,
    "feeDetails": {
    "restaurantId": "21395",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "49529",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:30:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "20% OFF",
    "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/brahma-garden-manik-baug-sinhgad-road-pune-21395",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "11887",
    "name": "Samudra Veg",
    "cloudinaryImageId": "b7r9runu5yjkfsl20tri",
    "locality": "Pandurang Colony",
    "areaName": "Erandwane",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "South Indian"
    ],
    "avgRating": 4.4,
    "veg": true,
    "feeDetails": {
    "restaurantId": "11887",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "176775",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.8,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "2.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹349",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/samudra-veg-pandurang-colony-erandwane-pune-11887",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "32682",
    "name": "Hotel Al Zaika",
    "cloudinaryImageId": "iuclbhllcu0efjn85wrd",
    "locality": "Hingane Home Colony",
    "areaName": "Karve Nagar",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "North Indian",
    "Biryani",
    "Chinese"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "32682",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "97829",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 1.6,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "1.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/hotel-al-zaika-hingane-home-colony-karve-nagar-pune-32682",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "63005",
    "name": "LunchBox - Meals and Thalis",
    "cloudinaryImageId": "ssdvzukpczydvv1hwwif",
    "locality": "Sudhakar Thorat Colony",
    "areaName": "Karve Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Punjabi",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "63005",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "4925",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 21,
    "lastMileTravel": 0.3,
    "serviceability": "SERVICEABLE",
    "slaString": "21 mins",
    "lastMileTravelString": "0.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹100 OFF",
    "subHeader": "ABOVE ₹249",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sudhakar-thorat-colony-karve-nagar-pune-63005",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "9377",
    "name": "Subway",
    "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
    "locality": "Rahul Nagar",
    "areaName": "Kothrud",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Fast Food",
    "Healthy Food",
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "9377",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-rahul-nagar-kothrud-pune-9377",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "229278",
    "name": "Faasos - Wraps & Rolls",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Law College Road",
    "areaName": "Erandwane",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "North Indian",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.3,
    "feeDetails": {
    "restaurantId": "229278",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "21809",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹150 OFF",
    "subHeader": "ABOVE ₹799",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-law-college-road-erandwane-pune-229278",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "338997",
    "name": "1441 Pizzeria",
    "cloudinaryImageId": "da96790d332180e9d71e6bc6556b9162",
    "locality": "Kothrud",
    "areaName": "Kothrud",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Italian",
    "Pizzas",
    "Pastas"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "338997",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "2697",
    "avgRatingString": "3.7",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 32,
    "lastMileTravel": 2.3,
    "serviceability": "SERVICEABLE",
    "slaString": "32 mins",
    "lastMileTravelString": "2.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 04:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹125 OFF",
    "subHeader": "ABOVE ₹499",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/1441-pizzeria-kothrud-pune-338997",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "15966",
    "name": "Mad Momos",
    "cloudinaryImageId": "qvts5oqwkc1up13mjzr9",
    "locality": "Suryoday Colony",
    "areaName": "Karve Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Chinese",
    "Tibetan",
    "Nepalese",
    "Pizzas",
    "Snacks",
    "Beverages"
    ],
    "avgRating": 3.8,
    "feeDetails": {
    "restaurantId": "15966",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "610",
    "avgRatingString": "3.8",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 2,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "2.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 06:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mad-momos-suryoday-colony-karve-nagar-pune-15966",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "13907",
    "name": "Wadeshwar(Law college road)",
    "cloudinaryImageId": "zsws4cdkzx90k3mlwozb",
    "locality": "Erandwane",
    "areaName": "Erandwane",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "South Indian",
    "Snacks",
    "Street Food",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 4.5,
    "feeDetails": {
    "restaurantId": "13907",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 4400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 4400
    },
    "parentId": "1770",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 3.5,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "3.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 22:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/wadeshwar-law-college-road-erandwane-pune-13907",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "13955",
    "name": "Ganesh Bhel",
    "cloudinaryImageId": "z7j7yjbafvvyqhipgahh",
    "locality": "Ganesh Nagar",
    "areaName": "Karve Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Fast Food"
    ],
    "avgRating": 4.5,
    "veg": true,
    "feeDetails": {
    "restaurantId": "13955",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "1772",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.5,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "1.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-19 22:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/ganesh-bhel-ganesh-nagar-karve-nagar-pune-13955",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "218321",
    "name": "Theobroma",
    "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
    "locality": "Kothrud",
    "areaName": "Kothrud",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Bakery",
    "Desserts"
    ],
    "avgRating": 4.5,
    "feeDetails": {
    "restaurantId": "218321",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3900
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3900
    },
    "parentId": "1040",
    "avgRatingString": "4.5",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 00:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "newg.png",
    "description": "Gourmet"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "Gourmet",
    "imageId": "newg.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "10% OFF",
    "subHeader": "ABOVE ₹159",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/theobroma-kothrud-pune-218321",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "213654",
    "name": "WarmOven Cake & Desserts",
    "cloudinaryImageId": "e938fb5f416cc2c28b4b519cf27b04cc",
    "locality": "Karve Road",
    "areaName": "Kothrud",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Ice Cream",
    "Beverages"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "213654",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "9696",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 05:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "60% OFF",
    "subHeader": "UPTO ₹120"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/warmoven-cake-and-desserts-karve-road-kothrud-pune-213654",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "258140",
    "name": "Kaati Zone Rolls & Wraps",
    "cloudinaryImageId": "lqu1yhlxougwpqbslmfe",
    "locality": "Karve Road",
    "areaName": "Kothrud",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Fast Food",
    "Bengali",
    "Beverages",
    "Desserts"
    ],
    "avgRating": 3.7,
    "feeDetails": {
    "restaurantId": "258140",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "248306",
    "avgRatingString": "3.7",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 05:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kaati-zone-rolls-and-wraps-karve-road-kothrud-pune-258140",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "395182",
    "name": "McDonald's Gourmet Burger Collection",
    "cloudinaryImageId": "tc96uohbqyn9mwkcreao",
    "locality": "Warje Malwadi Road",
    "areaName": "Kothrud",
    "costForTwo": "₹600 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.2,
    "feeDetails": {
    "restaurantId": "395182",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "10761",
    "avgRatingString": "4.2",
    "totalRatingsString": "100+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 2.5,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "2.5 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 02:45:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "aggregatedDiscountInfoV2": {},
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-warje-malwadi-road-kothrud-pune-395182",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "213645",
    "name": "Cupcake Bliss Cake & Desserts",
    "cloudinaryImageId": "40f193d8b23afb2988489dac1258962f",
    "locality": "Pandurang Colony",
    "areaName": "Erandwane",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Ice Cream",
    "Beverages"
    ],
    "avgRating": 4,
    "feeDetails": {
    "restaurantId": "213645",
    "fees": [
    {
    "name": "BASE_DISTANCE",
    "fee": 3400
    },
    {
    "name": "BASE_TIME"
    },
    {
    "name": "ANCILLARY_SURGE_FEE"
    }
    ],
    "totalFee": 3400
    },
    "parentId": "66732",
    "avgRatingString": "4.0",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 28,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "28 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2023-09-20 05:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/cupcake-bliss-cake-and-desserts-pandurang-colony-erandwane-pune-213645",
    "type": "WEBLINK"
    }
    }
    ];