import React from "react";
import ReactDOM from "react-dom/client";
import Header from  "./components/Header"
import Footer from  "./components/Footer"
import Body from  "./components/Body"
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter , RouterProvider} from "react-router-dom";


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


const AppLayout = () =>{        //main app component
    return(
        <div id = "parentContainer" className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <Error/>,
    }
]);        


const root = ReactDOM.createRoot(document.getElementById("root"));
//root react element which is reference to root div of the HTML document/DOM element.

//root.render(heading3);               //syntax to render a react element

//the ReactDOM renders react heading element inside root element of DOM/HTML as HTML

//root.render(<AppLayout/>);      //-> syntax to render a react component

root.render(<RouterProvider router={appRouter} />);
