import Subscription from './subscription/Subscription';
import Container from './Templates/Container';

import NewSubscription from './subscription/NewSubscription/NewSubscription.jsx'


const Main=()=>{
  let subscription=[
     {
       id:"0", 
       date:"2024-12-23", 
       title:"Yearly Subscription", 
       amount:"2500.00"
     }, 

     {
       id:"1", 
       date:"2024-05-13", 
       title:"Monthly Subscription", 
       amount:"299.00"
     }, 

     {
       id:"2", 
       date:"2024-07-09", 
       title:"Weekly Subscription", 
       amount:"79.49"
     }

  ]
  const AddSubscription=(data)=>
  {
    console.log("Data recive in Main.jsx");
    console.log(data);
    subscription.push(data);
  }
  
  return(
    <Container>
      <NewSubscription onAddSubbscription={AddSubscription}/>
      <Subscription passedDate={subscription[0].date} passedTitle={subscription[0].title} passedAmount={subscription[0].amount}/>
      <Subscription passedDate={subscription[1].date} passedTitle={subscription[1].title} passedAmount={subscription[1].amount}/>
      <Subscription passedDate={subscription[2].date} passedTitle={subscription[2].title} passedAmount={subscription[2].amount}/>
    </Container>
  );
}
export default Main;