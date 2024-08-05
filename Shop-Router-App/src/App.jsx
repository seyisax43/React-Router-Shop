import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {
 

  return (
   <div className='container mx-auto'>
<nav className='nav'>
  <Link to='/invoices'><span>Invoices</span></Link>
  <Link to='/expenses'><span>Expenses</span></Link>

</nav>
<Outlet></Outlet>
   </div>
);
}

export default App
