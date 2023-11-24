import { useEffect, useState } from "react";
import {LOGO_IMG_URL , CART_IMG_URL} from  "../utils/constants"


const Header = () =>{
    let btnName = "login";
    const [loginBtnName,setLoginBtnName] = useState("Login");

    // useEffect(()=>{
    //     console.log('useEffect called');
    //     //since we are not using the dependency array here this useEffct will be called evrytime the component renders/re-renders

    // });

    console.log('rendering header');

    useEffect(()=>{
        console.log("useEffect called");
        //since we have a dependency array with useEffect , it renders just once (during initial render).
        //if we add something to the dependency array , useEffect will be called everytime the dependency changes.
        //state variables are passed as dependency in the dependency array
    },[])


    return(
        <div className="header">
            <div className="logo">
                <img className="logoImg" src={LOGO_IMG_URL}/>
            </div>
            <div className="navBar">
                <ul>
                    <li>Home</li>
                    <li>Restaurants</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>
                        <button className="loginButt" onClick={()=>{
                            loginBtnName === "Login"?setLoginBtnName("Logout"):setLoginBtnName("Login");
                            //btnName = "Logout";
                            //console.log(btnName);   //not work as it is a normal js variable.
                            //whenever a state variable changes the entire component is re-rendered
                            //but here it checks the diffing and updates just that specific state/element rest is rendered as it is.
                    }}>{loginBtnName}</button>
                    </li>
                </ul>
            </div>
            <div className="cart">
                <img className="cartImg" src={CART_IMG_URL}/>
            </div>
        </div>
    )
}

export default Header;