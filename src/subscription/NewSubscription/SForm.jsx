import "./SForm.css";
import { useState } from "react";

const SForm = () => {
  const [form, setForm] = useState({
    UserTitle: "",
    UserDate: "",
    UserAmount: "",
  });

  const TitleChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserTitle: events.target.value };
    });
    console.log(form.UserTitle);
  };

  const DateChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserDate: events.target.value };
    });
    console.log(form.UserDate);
  };

  const AmountChange = (events) => {
    setForm((prevState) => {
      return { ...prevState, UserAmount: events.target.value };
    });
    console.log(form.UserAmount);
  };
  const SumbitHandler=(events)=>{
    return(
      events.preventDefault()
    );
  }
  
  return (
    <form onSubmit={SumbitHandler}>
      <div className="New_Sub_Controls">
        <div className="New_Sub_Control">
          <h2 className="Hadding">ADD NEW SUBSCRIPTION</h2>
          <input
            type="text"
            placeholder="TITLE *"
            onChange={TitleChange}
            required
          ></input>
          <br />

          <input
            type="date"
            placeholder="Date *"
            onChange={DateChange}
            required
          ></input>
          <br />

          <input
            type="text"
            placeholder="Amount *"
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
