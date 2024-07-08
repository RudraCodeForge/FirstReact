import './NewSubscription.css';
import {useState} from 'react';

import SForm from './SForm.jsx';

const NewSubscription=(props)=>{
  const [setForm, setNewForm]=useState(false);
  const onSaveHandler =(data)=>{
    const SubscriptionData={...data,id:Math.random().toString()};
    props.onAddSubbscription(SubscriptionData)
  };
  const showForm=()=>{
    if(setForm==false){
      setNewForm(true)
    }
    else{
      setNewForm(false)
    }    
  }
  return(
    <div>
      {setForm && <SForm onSave={onSaveHandler}/>}
      <button className="AddNew"type="button" onClick={showForm}>Add NewSubscription</button>
    </div>
  );
}
export default NewSubscription;