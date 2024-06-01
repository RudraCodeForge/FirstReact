import './Date.css';
const DATE=(props)=>
{
  const date = new Date(props.PassedDate);
  const month = date.toLocaleString('default', { month: 'short' });
  const day= date.toLocaleString('en-US', { day: '2-digit' });
  const year=date.getFullYear();

  return(
    <div className="Date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
}
export default DATE;