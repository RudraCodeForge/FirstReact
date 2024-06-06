import "./Subscription.css";

import DATE from './SubscriptionDate';

import Container from '../Templates/Container.jsx';

import { useState } from 'react';

//Main Subscription function
function Subscription (props) {
  
  //useState for update the subscription title
  const [title, setTitle]=useState(props.passedTitle);
  
  //function to work on onClick event
  const ChangeTitle=()=>
   {
    let changetitle=prompt('Enter the new Title');
     setTitle (changetitle);
   };
  return (
    <Container className="Container">
      <DATE PassedDate={props.passedDate}/>
      <div className="Title">
        {title}
      </div>
      <div className="Amount">
        {props.passedAmount}
      </div>
      <button className="Ctitle" type="button" onClick={ChangeTitle}>
        CHANGE TITLE
      </button>
    </Container>
  );
}
export default Subscription;