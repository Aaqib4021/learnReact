import React from "react";
import ReactDOM from 'react-dom/client';


const heading =  React.createElement("h1",{},"this is an h1 from react!");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
//?this won't work because react is inside the node modules so we have to import that from there.. 