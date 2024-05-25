import "./Subscription.css";
function Subscription (props) {
  
  return (
    <div>
      <div className=" Date">Date :- {props.passedDate.toISOString()}</div>
      <div className="Title">Title :- {props.passedTitle}</div>
      <div className="Amount">Amount :- {props.passedAmount}</div>
    </div>
  );
}
export default Subscription;