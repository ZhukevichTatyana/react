import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import React from 'react'; 
import Check from './modules/service/components/Check';
import CheckboxList from './modules/service/components/CheckboxList';
 import ServiceWrapper from './modules/service/components/ServiceWrapper';
 import CategoriesList from './modules/menu/components/CategoriesList';
 import DishesList from './modules/menu/components/DishesList';

import WaiterWrapper from './modules/waiters/components/WaiterWrapper';

function AppRoutes() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                     <Route path="menu" element={<CategoriesList />}/>
                             
                    <Route path="menu/:menuId" element={<DishesList />}/> 
                                      
                
                    <Route path="waiters" element={<WaiterWrapper />} />
                    <Route path="service" element={<ServiceWrapper />} />
                    <Route path="dishes" element={<CheckboxList />} />
                    <Route path="check" element={<Check />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoutes;
