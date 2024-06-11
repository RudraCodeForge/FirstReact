import Subscription from './subscription/Subscription';
import Container from './Templates/Container';
import {useState} from 'react';
import './MAIN.css';

import Filter from './subscription/Filter.jsx';
import NewSubscription from './subscription/NewSubscription/NewSubscription.jsx'

const INITIAL_SUBSCRIPTION=[
  {
    id:"0", 
    date:(new Date('2021','03','23')), 
    title:"Yearly Subscription", 
    amount:"2500.00"
  }, 

  {
    id:"1", 
    date:(new Date('2022','03','23')), 
    title:"Monthly Subscription", 
    amount:"299.00"
  }, 

  {
    id:"2", 
    date:(new Date('2021','09','20')), 
    title:"Weekly Subscription", 
    amount:"79.49"
  }
  
]
const Main=()=>{
  const [subscription,SetSubscription]=useState(INITIAL_SUBSCRIPTION);
  
  const  [FilterYear, SetFilterYear]=useState('All');
  
  const AddSubscription=(data)=>
  {
    SetSubscription(prevState=>{return [data,...subscription]})
  }

  const FilterChangeHandler=(Year) =>
  {
    SetFilterYear(Year);
  }

  console.log(FilterYear);

  let FilterSubscription;

  {FilterYear=="All"? FilterSubscription=subscription:FilterSubscription=subscription.filter((item)=>{
    return(
      item.date.getFullYear().toString()===FilterYear
    )
  })};
  
  return(
    <Container>
      <NewSubscription onAddSubbscription={AddSubscription}/>
      <Filter onFilterChange={FilterChangeHandler} selectedFilter={FilterYear}/>

      {FilterSubscription.length===0?<p className="Notice">NO SUBSCRIPTION FOUND </p>:
        FilterSubscription.map(subscription => (
  <Subscription
    key={subscription.id}
    passedDate={subscription.date}
    passedTitle={subscription.title}
    passedAmount={subscription.amount}
  />
))}
      
      
    </Container>
  );
}
export default Main;