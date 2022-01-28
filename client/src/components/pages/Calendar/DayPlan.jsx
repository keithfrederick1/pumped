import React from 'react';
import { useState } from 'react';

const DayPlan = (props) => {
const { plan } = props;

  return (
      <td>{plan}</td>
  )
}
// {week.map((day, i) => (<td>{plan}</td>))}

export default DayPlan;