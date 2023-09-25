import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id: "child"},
        React.createElement("h1",{id: "newHead"},
                "hello from newHead"
         )
    )
);

//nested elements currying
const newParent = React.createElement("div",{id:"newParent"},[
    React.createElement("div",{id:"child_1"},[
        React.createElement('h1',{},"I am an H1 tag"),
        React.createElement('h2',{},"I am an H2 tag")
    ]),
    React.createElement("div",{id:"child_2"},[
        React.createElement('h1',{},"I am an H1 tag"),
        React.createElement('h2',{},"I am an H2 tag")
    ])
]);


const headingEle = React.createElement("h1",
        {id : "heading" , xyz : "abc" }, //attributes like id : "root"
        "hello world from react new file"   //html text inside h1
    );
//React.createElement returns an JS object(react element)  , hence headingEle is a JS object;  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(newParent);    //renders the object headingEle or parent (React element)