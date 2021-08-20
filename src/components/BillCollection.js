import React from 'react';
import BillCard from './BillCard'

export default function BillCollection({ bills, handleClick, deleteBill }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map(bill => 
          <BillCard 
            key={bill.id}
            bill={bill}
            handleClick={handleClick}
            deleteBill={deleteBill}

          /> 
        )}
      </div>
    </div>
  );
}
