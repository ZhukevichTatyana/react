import "./style.css"
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";

import Invoices from "./routes/invoices";
import AlbumList from "./routes/AlbumList";
import PhotoList from "./routes/PhotoList";
 

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
      
        <Route path="AlbumList" element={<AlbumList  /> }/>   
        <Route path="AlbumList/:id" element={<PhotoList/> }/> 
        
        {/* <Route path="PhotoList" element={<PhotoList/>}/> */}
         
        <Route path="invoices" element={<Invoices />} />
     
      </Route>
    </Routes>
  </BrowserRouter>
);