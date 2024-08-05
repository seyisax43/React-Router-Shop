import { Link, NavLink, Outlet } from "react-router-dom"
import { getInvoices } from "./data"


export default function Invoices(){
let invoices = getInvoices()
    return (
        <main >
         
        <div style={{ display:'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'gray'}}>
           { invoices.map(invoice =>(
            <NavLink   
            style={({isActive})=>{

              return{
                color: isActive?"gold":""
              }
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}target="_blank">
                {/* the target is to open the it on a new tab */}
                
                {invoice.name}
            </NavLink>
           ))}
     
        </div>
        <Outlet></Outlet>
        </main>
    )
}