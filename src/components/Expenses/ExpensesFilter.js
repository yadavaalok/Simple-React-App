import React from 'react';

import './ExpensesFilter.css';
import Card from '../UI/Card';

const ExpensesFilter = (props) => {
    const dropdownChangerHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangerHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;