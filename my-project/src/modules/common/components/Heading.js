import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
//   return <Button variant="contained">Hello World</Button>;
function Heading() {
    return (
        <div>
            {/* App Bar = <Link to="/users/list">Users</Link> */}
            <h2>Управление рестораном</h2>
            
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >        
       <Button variant="contained"> <Link to="/menu">MENU</Link></Button> |{" "}
       <Button variant="contained"> <Link to="/waiters">WAITERS</Link></Button> |{" "}
       <Button variant="contained"><Link to="/service">SERVICE</Link></Button> |{" "}
       <Button variant="contained"><Link to="/dishes">DISHES</Link></Button> |{" "} 
       <Button variant="contained"><Link to="/check">CHECK</Link></Button> |{" "} 
      </nav>
        </div>
    );
}
export default Heading;
