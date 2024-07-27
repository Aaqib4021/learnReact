import React from "react";
import ReactDOM from 'react-dom/client';


// const heading =  React.createElement("h1",{},"this is an h1 from react!");
// console.log(heading);

//  const jsxheading = <h1>this is an h1 from jsx!</h1>//?single line
// const jsxheading = (<h1>
//     this is an h1 from jsx!
//     </h1>)//?multiple lines () is used

// console.log(jsxheading);

// const HeadingComponent1 = ()=> {
//     return <h1>this is an h1 from functional component! </h1>;//?same as below..
// }

// const HeadingComponent = () => (//?this is now a functional component 
//     <h1>this is an h1 from functional component! </h1>
// );

// console.log(HeadingComponent);

//?the aove code can be written inside the function not in arrow function 

// const HeadingComponent = function (){
//     return  <h1>this is an h1 from functional component! </h1>
// }
//?component compostion 
//component inside another component
// const Title = ()=>(
//     <p>Hey this is my Title</p>
// )


// const HeadingComponent = ()=>(
//     <div>
//         <h1>This is my heading from component</h1>
//         <Title/>
//         <Title></Title>//?same as above
//          {Title()}//?also same as it at last a function
//     </div>
// );



//!what if element inside component 

const title = <p>This is title</p>

const HeadingComponent = ()=>(
    <div>
        <h1>This is my heading from component</h1>
        {title}
    </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);   
//?this won't work because react is inside the node modules so we have to import that from there..  