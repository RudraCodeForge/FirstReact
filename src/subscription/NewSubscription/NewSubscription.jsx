import './NewSubscription.css';

import SForm from './SForm.jsx';

const NewSubscription=(props)=>{
  const onSaveHandler =(data)=>{
    const SubscriptionData={...data,id:Math.random().toString()};
    props.onAddSubbscription(SubscriptionData)
  };
  return(
    <div>
      <SForm onSave={onSaveHandler}/>
    </div>
  );
}
export default NewSubscription;