import React from 'react'
import Employee_table from '../../components/employee_table/Employee_table'
import Employer_tab from '../../components/employer_tab/Employer_tab'
import './emp_sheet.scss'

function Emp_sheet() {
  return (
    <div className='emp_sheet'>
      <Employer_tab />
      <Employee_table />
    </div>
  )
}

export default Emp_sheet