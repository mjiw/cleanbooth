import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Info from './pages/ProductInfo';


function App() {
  return (
    <div>
      <Link to="/information">상세정보</Link>
      <Routes>
        <Route path="/information" element={
          <>
            <Info></Info>
          </>
        } />
      </Routes>
    </div>
  )   
}

export default App;
