import "./Filter.css";
const Filter =(props)=>{
  const YearHandler=(events)=>{
    console.log(events.target.value);
    props.onFilterChange(events.target.value);
  }
  return(
    <div className="Filter">
      <div className="Filter_Controls">
        <label>FILTER BY YEAR </label>
        <select value={props.selectedFilter} onChange={YearHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;