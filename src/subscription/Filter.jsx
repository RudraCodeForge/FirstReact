import "./Filter.css";
const Filter =()=>{
  const YearHandler=(events)=>{
    console.log(events.target.value);
  }
  return(
    <div className="Filter">
      <div className="Filter_Components">
        <label>FILTER BY YEAR </label>
        <select onChange={YearHandler}>
          <option value="All">All</option>
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