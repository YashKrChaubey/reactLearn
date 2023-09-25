import {LOGO_IMG_URL , CART_IMG_URL} from  "../utils/constants"



const Header = () =>{
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
                </ul>
            </div>
            <div className="cart">
                <img className="cartImg" src={CART_IMG_URL}/>
            </div>
        </div>
    )
}

export default Header;