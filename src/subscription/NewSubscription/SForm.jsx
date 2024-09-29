import "./SForm.css";
import { useState } from "react";

const SForm = (props) => {
  const [form, setForm] = useState({
    UserTitle: "Subscription type:- ",
    UserDate: "",
    UserAmount: "Enter Amount:-",
  });

  const TitleChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserTitle: events.target.value };
    });
  };

  const DateChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserDate: events.target.value };
    });
  };

  const AmountChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserAmount: events.target.value };
    });
  };
  
  const SubmitHandler = (event) => 
  {
    event.preventDefault();
    const subscription={ 
      title:form.UserTitle,
      date:new Date(form.UserDate), 
      amount:form.UserAmount
    };
    props.onSave(subscription);
  };
  
  return (
    <form onSubmit={SubmitHandler}>
      <div className="New_Sub_Controls">
        <div className="New_Sub_Control">
          <h2 className="Hadding">ADD NEW SUBSCRIPTION</h2>
          
          <input
            type="text"
            value={form.UserTitle}
            onChange={TitleChange}
            required 
          ></input>
          <br />

          <input
            type="date"
            value={form.UserDate}
            onChange={DateChange}
            required
          ></input>
          <br />

          <input
            type="text"
            value={form.UserAmount}
            onChange={AmountChange}
            required
          ></input>
          <br />
        </div>
        <div className="Action">
          <span>
            <button type="Submit" className="FSumbit">
              ADD SUBSCRIPTION
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};
export default SForm;
