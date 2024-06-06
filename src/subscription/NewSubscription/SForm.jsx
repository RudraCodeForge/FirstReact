import './SForm.css';
import {useState} from 'react';

const SForm=()=>{
  const [UserTitle,setUserTitle]=useState("");
  const [UserDate,setUserDate]=useState("");
  const [UserAmount,setUserAmount]=useState("");
  
  const TitleChange=()=>{
    let NewTitle=event.target.value;
    setUserTitle(NewTitle) ;
    console.log(UserTitle);
  }
  const DateChange=()=>{
    let NewDate=event.target.value;
    setUserDate(NewDate);
    console.log(UserDate);
  }
  const AmountChange=()=>{
    let NewAmount=event.target.value;
    setUserAmount(NewAmount);
    console.log(UserAmount);
  }
  return(
    <form>
      <div className="New_Sub_Controls">
        <div className="New_Sub_Control">
          <h2 className="Hadding">ADD NEW SUBSCRIPTION</h2>
          <input type="text" placeholder="TITLE *" onChange={TitleChange} required>
          </input><br/>
          
          <input type="date" placeholder="Date *" onChange={DateChange} required>
          </input><br/>
          
          <input type="text" placeholder="Amount *" onChange={AmountChange} required>
          </input><br/>
        </div>
        <div className="Action">
          <span><button type="Submit" className="FSumbit">Add Subscription</button></span>
        </div>
      </div>
    </form>
  );
}
export default SForm;