import "./SForm.css";
import { useState } from "react";

const SForm = () => {

  const [form, setForm] = useState({
    UserTitle: "",
    UserDate: "",
    UserAmount: "",
  });

  const TitleChange = (event) => {
    setForm({ ...form, UserTitle: event.target.value });
    console.log(form.UserTitle);
  };

  const DateChange = (event) => {
    setForm({ ...form, UserDate: event.target.value });
    console.log(form.UserDate);
  };

  const AmountChange = (event) => {
    setForm({ ...form, UserAmount: event.target.value });
    console.log(form.UserAmount);
  };
  return (
    <form>
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
              Add Subscription
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};
export default SForm;
