import React, {useEffect, useState} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {

  const [bills, setBills] = useState([])

  useEffect(()=> {
    fetch(  "http://localhost:8002/bills")
    .then(res => res.json())
    .then(setBills)
  }, [])


function selectBill(id){
  setBills( bills.map(bill => 
    bill.id === id ? {...bill, selected: true}: bill ))
}


function releaseBill(id){
  setBills( bills.map(bill => 
    bill.id === id ? {...bill, selected: false}: bill ))
}


function deleteBill(id){
  setBills(bills.filter(bill => bill.id !== id))
}

  return (
    <div>
      <BillsCast 
          bills={bills.filter(bill => bill.selected)} 
          handleClick={releaseBill}
          deleteBill={deleteBill}
      />
      
      <BillCollection
          bills={bills}
          handleClick={selectBill}
          deleteBill={deleteBill}
       />
    </div>
  );
}
