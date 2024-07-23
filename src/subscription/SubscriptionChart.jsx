import "./SubscriptionChart.css";
import Chart from "../Templates/Charts/Chart.jsx";
const SubscriptionChart = (props) => {
  const ChartData = [
    {key: '0', label: "Jan", value: 0 }, 
    {key: '1', label: "Feb", value: 0 }, 
    {key: '2', label: "Mar", value: 0 },
    {key: '3', label: "Apr", value: 0 }, 
    {key: '4', label: "May", value: 0 }, 
    {key: '5', label: "Jun", value: 0 }, 
    {key: '6', label: "Jul", value: 0 }, 
    {key: '7', label: "Aug", value: 0 }, 
    {key: '8', label: "Sep", value: 0 }, 
    {key: '9', label: "Oct", value: 0 }, 
    {key: '10', label: "Nov", value: 0 }, 
    {key: '11', label: "Dec", value: 0 }
  ];
  for(const subscription of props.FilteredSubscription){
    const month = subscription.date.getMonth();
    ChartData[month].value += subscription.amount;
  }
  return(
    <Chart DataSets={ChartData}/>
  )
};
export default SubscriptionChart;
