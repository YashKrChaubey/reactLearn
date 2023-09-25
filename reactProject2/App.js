import React from "react";
import ReactDOM from "react-dom/client";


const headingEle1 = React.createElement("h1",{id:"header"},"I am html text inside headingElement1");
//element heading is an js object or react element -> it becomes HTML when we render it on DOM
//React.createElement() -> JS Object/ELEMENT  ->(ReactDOM)->  HTML/DOM Element


const headingEle2 = <h2 id = "heading2" > Hi! I am JSX </h2>;
//element heading2 is an react element/(js object)  -> created using JSX
//JSX ->(Babel)-> React.createElement() -> JS Object/ELEMENT  ->(ReactDOM)->  HTML/DOM Element


const heading3 = (
     <h2 id = "heading3" className = "head3">
        Hi! I am multiline JSX
     </h2>
    );
//multiline jsx must be written inside (brackets).    
 

//Functional Components in react
//component name always start from capital letter else not rendered

const NewFuncComp1 = ()=>{
    return <h2 id = "heading4" > Hi! I am a react functional component </h2>
    //if single line inside function we can skip writing return
    //we can just write 
    //<h2 id = "heading4" > Hi! I am a react functional component </h2>;
}


//arrow function syntax in JS
//in js this is an arrow function syntax that returns true.
//here we can skip writing return true , just true is enough
const newVar1 = (param1,param2) => true;
//OR
const newVar2 = (params) => {
    true
}


//JS and React element(JS Object) inside a component
//we can also inject javascript code  or react elements(JS objects) inside/within JSX using {} parenthesis
//we know react element = JS object ,so syntax is same for insertion
//same syntax for inserting react element inside another react element we use {} parenthesis
const NestedFuncComp1 = ()=>{
    <div id="container1" >
    {console.log("i am a JS code within JSX")}
    {200+500}
    {headingEle1}
    return <h2 id = "heading5" > Hi! I am a react functional component </h2>;
    </div>
}


//component composition
//composing components puting one component inside another component

//component inside component
//all three valid ways to inject a component inside another
const NewComp =()=>{
    return(
    <div id="container2" >
        <NewFuncComp1/>
        <NewFuncComp1></NewFuncComp1>
        {NewFuncComp1()}
        <h2 id = "heading7" > Hi! I am a react functional component </h2>
    </div>
    );
}

//below is how we write inline css in JSX
    //1- pass javascript object {} inside the style tag in { {js object with css} }
    // outer bracket to say that it it JS between JSX and inner object to identify as an JS object

const cssObj = {
    backgroundColor:yellow,
}    

//we can also pass this object as JS object -> style = {cssObj}
const DemoComp = () =>{
    return(
        <div className="democomp" style={{backgroundColor:"yellow"}}>
            <div className="democomp" style={cssobj}>
                <p>both ways to write inline Css</p>
            </div>
        </div>
    );
}





const root = ReactDOM.createRoot(document.getElementById("root"));
//root react element which is reference to root div of the HTML document/DOM element.

//root.render(heading3);               //syntax to render a react element

//the ReactDOM renders react heading element inside root element of DOM/HTML as HTML

root.render(<NewComp/>);      //-> syntax to render a react component

