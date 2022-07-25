import React from 'react'
import './expCard.css'

function ExpCard({expT, expD, expC, expS}) {
  return (
    <div className="expCard">
      <div className = "expTitle">{expT}</div>
      <div className = "expCompany">{expC}</div>
      <div className = "expDate"><i>{expD}</i> </div> 
      <br></br>
      <div className = "expSummary">{expS}</div>
    </div>

  )
}

export default ExpCard;