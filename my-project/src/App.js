
import './App.css';
import * as React from 'react';
//import Button from '@mui/material/Button';
//   return <Button variant="contained">Hello World</Button>;

import Container from '@mui/material/Container';

import Heading from './modules/common/components/Heading';
import { Outlet } from 'react-router-dom';
function App() {
    return (
       
        <Container maxWidth="sm">

            <Heading />
            <Outlet />
        </Container>
        
    );
}
export default App;