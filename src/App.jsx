import './App.css'
import Subscription from './components/Subscription';

export default function App() {
   let subscription=[
     {
       id:"0", 
       date:"2024-12-23", 
       title:"Yearly Subscription", 
       amount:"2500"
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
  return (
    <main>
      <Subscription passedDate={subscription[1].date} passedTitle={subscription[1].title} passedAmount={subscription[1].amount}/>
    </main>
  );
}
