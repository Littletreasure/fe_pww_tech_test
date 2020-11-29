import React from "react";
import "../css/styles.css";

function Sort(props) {
  
  return (
    <div className="productSort">
      <div>
        <label>
          Sort by:
          <select name="sortBy" id="sortBy" onChange={props.handleChange}>
            <option value=""></option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="type">Type</option>
            <option value="department">Department</option>
          </select>
        </label>

        <label>
          <input
            type="radio"
            name="order"
            value="asc"
            onChange={props.handleChange}
            
          />
          asc
        </label>
        <label>
          <input
            type="radio"
            name="order"
            value="desc"
            onChange={props.handleChange}
          />
          desc
        </label>
      </div>
      <div>
      {!props.group ? 
      (
        <div className="groupChange">
        <label>
          Group by:
          <select name="groupBy" id="groupBy" onChange={props.handleGroupChange}>
            <option value=""></option>
            <option value="type">Type</option>
            <option value="department">Department</option>
          </select>
        </label>
        {/* <p>Group by Type</p><button onClick={props.handleGroupChange}>Click</button> */}
      </div>
      ) : (
        <div className="groupChange">
        <button onClick={props.handleBackClick}>Back</button>
      </div>
      ) }
      </div>
    </div>
  )}

  export default Sort;