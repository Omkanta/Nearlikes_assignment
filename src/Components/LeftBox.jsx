import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div>
      {/* Add input for bill */}
      <p>Bill</p>
      <input className="bill_input" placeholder="0" onChange={(e)=>handleBill(+e.target.value)}></input>
      {/* Add buttons for % of tip */}
      <p>Select Tip %</p>
      <div style={{"display":"grid",margin:"15px" ,gap:"10px" , gridTemplateColumns:"repeat(3,70px)"}}>
        <button onClick={()=>handleTip(5)}>5%</button>
        <button onClick={()=>handleTip(10)}>10%</button>
        <button onClick={()=>handleTip(15)}>15%</button>
        <button onClick={()=>handleTip(25)}>25%</button>
        <button onClick={()=>handleTip(50)}>50%</button>
        <input type="number" placeholder="custom" className="custom" onChange={(e)=>handleTip(+e.target.value)}/>
      </div>
      {/* Add input for no.of peoples */}
      <p>Number of people</p>
      <input type="number" className="people" onChange={(e)=>handlePeople(+e.target.value)}/>
    </div>
  );
};

export default LeftBox;
