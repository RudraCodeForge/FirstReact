import "./Subscription.css";
import DATE from './Date.jsx';

function Subscription (props) {
  
  return (
    <div className="Container">
      <DATE PassedDate={props.passedDate}/>
      <div className="Title">{props.passedTitle}</div>
      <div className="Amount">{props.passedAmount}</div>
    </div>
  );
}
export default Subscription;