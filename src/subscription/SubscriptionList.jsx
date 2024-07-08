import Subscription from './Subscription';
import './SubscriptionList.css';

const SubscriptionList =(props)=>{
  if(props.subscriptions.length==0){return(<p className="Notice">NO SUBSCRIPTION FOUND</p>)}
  return(props.subscriptions.map(subscription => (
  <Subscription
    key={subscription.id}
    passedDate={subscription.date}
    passedTitle={subscription.title}
    passedAmount={subscription.amount}
  />))
  )
}
export default SubscriptionList;