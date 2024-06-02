import "./Subscription.css";

import DATE from './Date';

import Container from '../Templates/Container.jsx';

function Subscription (props) {

  return (
    <Container className="Container">
      <DATE PassedDate={props.passedDate}/>
      <div className="Title">{props.passedTitle}</div>
      <div className="Amount">{props.passedAmount}</div>
    </Container>
  );
}
export default Subscription;