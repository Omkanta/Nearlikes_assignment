import React from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  return <div>
    {/* Add tip Amount and total here */}
    <h1 className="tipAmount">Tip Amount/ per person {tipAmount}</h1>
    <h1 className="TotalAmount"> Total / per person {total}</h1>
    {/* Add button to RESET */}
    <div style={{margin:"auto"}}><button className="Reset" onClick={()=>{handleBill(0); handlePeople(1); handleTip(15)}}>RESET</button></div>
  </div>;
};

export default RightBox;
