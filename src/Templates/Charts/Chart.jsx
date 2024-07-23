import "./Chart.css";
import ChartBar from "./ChartBar.jsx";

const Chart = (props) => {
  const DataSetValues = props.DataSets.map((dataSet) => dataSet.value);
  const max = Math.max(...DataSetValues);
  return (
    <div className="chart">
      {props.DataSets.map((dataSet) => (
        <ChartBar
          Value={dataSet.value}
          Label={dataSet.label}
          Key={dataSet.key}
          Maxvalue={max}
        />
      ))}
    </div>
  );
};

export default Chart;
