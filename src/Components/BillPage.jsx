import { useEffect, useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill,setBill]=useState(0);
  const [people,setPeople]=useState(1);
  const [total,setTotal]=useState(0);
  const [tipAmount,settipAmount]=useState(0);
  const [tip,setTip]=useState(15);
  const handleTip=(val)=>{
    setTip(val)
  }

  const handleBill=(val)=>{
    setBill(val)
  }

  const handlePeople=(val)=>{
    setPeople(val)
  }
  // console.log(tip,bill,people);

  function findTip(){
      let temp=bill/people;

      let tempTip=temp*(tip/100)
      console.log(temp.toFixed(),tempTip.toFixed());
      settipAmount(tempTip);
      setTotal(temp+tempTip)
  }
  useEffect(()=>{
    findTip()
  },[bill,tip,people])
  return (
    <div className="billbox" style={{display:"flex", justifyContent:"space-between",gap:"20px", width:"80%",margin:"auto", }}>
      
      <LeftBox handleTip={handleTip} handleBill={handleBill}  bill={bill} people={people} handlePeople={handlePeople}/>
      <RightBox tipAmount={tipAmount} total={total} people={people} handleBill={handleBill} handleTip={handleTip} handlePeople={handlePeople} />
    </div>
  );
};

export default BillPage;