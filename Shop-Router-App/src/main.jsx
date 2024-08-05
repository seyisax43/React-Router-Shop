import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Invoices from './components/invoices.jsx'
import Expenses from './components/expenses.jsx'
import Bills from './components/bills.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}> 
    <Route path='/invoices' element={<Invoices/>}>
      <Route index element={
        <main>
          <p>Select an Invoice</p>
        </main>
      }></Route>
    <Route path=':invoiceid' element={<Bills/>}> </Route>  
    
    
    </Route>
    {/* <Route path='/invoices/:invoiceid' element={<Bills/>}> </Route> */}
    <Route path='/expenses' element={<Expenses/>}> </Route>
    <Route path='*' element={
      <main>
        <p>There is nothing here</p>
      </main>
    }>
    </Route>
    </Route>
  </Routes>
  </BrowserRouter>
);
