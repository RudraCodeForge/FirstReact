/*import Subscription from './subscription/Subscription';*/

import Container from './Templates/Container';
import SubscriptionChart from './subscription/SubscriptionChart.jsx';
import {useState} from 'react';
import './MAIN.css';

import Filter from './subscription/Filter.jsx';
import NewSubscription from './subscription/NewSubscription/NewSubscription.jsx'

import SubscriptionList from './subscription/SubscriptionList.jsx';

const INITIAL_SUBSCRIPTION=[
  {
    id:"0", 
    date:(new Date('2021','03','23')), 
    title:"Yearly Subscription", 
    amount:"2500.00"
  }, 

  {
    id:"1", 
    date:(new Date('2022','07','23')), 
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
/*Main function start here*/
const Main=()=>{
  
  /* Use states to store main subscription start here */
  const [subscription,SetSubscription]=useState(INITIAL_SUBSCRIPTION);
  /* Use states to store main subscription ends here */

  /* Use states to store Year start here */
  const  [FilterYear, SetFilterYear]=useState('All');
  /* Use states to store Year ends here */

  /* function to add user added function in main subscription start here */
  const AddSubscription=(data)=>
  {
    SetSubscription(prevState=>{return [data,...subscription]})
  }
  /* function to add user added function in main subscription ends here */

  /* function to update Year starts here */
  const FilterChangeHandler=(Year) =>
  {
    SetFilterYear(Year);
  }
  /* function to update Year ends here */
  
/*Try to apply if condition to show Subscription on yearly base Start here*/ 
  let FilterSubscription=subscription;

  if(FilterYear!=="All")
  {
    FilterSubscription =subscription.filter((item)=>{
    return(
      item.date.getFullYear().toString()===FilterYear
    )
  })
  };
  /*Try to apply if condition to show Subscription on yearly base ends here*/ 


  /*Try to apply && condition to show Subscription on yearly base Start here*/ 
  {/*FilterYear=== "All" && FilterSubscription=subscription}
  {FilterYear!== "All" && FilterSubscription=subscription.filter((item)=>{
    return(
      item.date.getFullYear().toString()===FilterYear
    )
  })*/}
  /*Try to apply if condition to show Subscription on yearly base ends here*/
  
  
  /*Try to apply ternary operator condition to show Subscription on yearly base Start here*/ 
  {/*FilterYear==="All"? FilterSubscription=subscription:FilterSubscription=subscription.filter((item)=>{
    return(
      item.date.getFullYear().toString()===FilterYear
    )
  })*/}
  /*Try to apply ternary operator condition to show Subscription on yearly base ends here*/ 
  
  
  /*Try to apply if condition to show Subscription available or not Start here*/ 
  
  {/*let content=<p className="Notice">NO SUBSCRIPTION FOUND </p>;
  if(FilterSubscription.length!==0)
  {
    content=FilterSubscription.map(subscription => (
  <Subscription
    key={subscription.id}
    passedDate={subscription.date}
    passedTitle={subscription.title}
    passedAmount={subscription.amount}
  />
))
  }; */}
  
  /*Try to apply if condition to show Subscription available or not ends here*/ 
  
  return(
    <Container>
      <NewSubscription onAddSubbscription={AddSubscription}/>
      
      <Filter onFilterChange={FilterChangeHandler} selectedFilter={FilterYear}/>

      <SubscriptionChart FilteredSubscription={FilterSubscription} />
      {/*Show content of based on if conditions content*/}
      
      <SubscriptionList subscriptions={FilterSubscription} />

      
      {/*Try to apply && condition to show Subscription available or not Start here*/}
      {/*FilterSubscription.length===0 && <p className="Notice">NO SUBSCRIPTION FOUND </p>}
      {FilterSubscription.length!==0 && FilterSubscription.map(subscription => (
  <Subscription
    key={subscription.id}
    passedDate={subscription.date}
    passedTitle={subscription.title}
    passedAmount={subscription.amount}
  />
))*/}
    {
      /*Try to apply && condition to show Subscription available or not ends here*/ 
    }
      

    {
      /*Try to apply ternary condition to show Subscription available or not Start here*/ 
    }
    {/*FilterSubscription.length===0?<p className="Notice">NO SUBSCRIPTION FOUND </p>:
        FilterSubscription.map(subscription => (
  <Subscription
    key={subscription.id}
    passedDate={subscription.date}
    passedTitle={subscription.title}
    passedAmount={subscription.amount}
  />
))*/}
    {
      /*Try to apply ternary condition to show Subscription available or not ends here*/ 
    }
      
    </Container>
  );
}
export default Main;
   /* Main Function ends here */