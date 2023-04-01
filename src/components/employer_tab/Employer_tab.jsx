import React from 'react'
import './employer_tab.scss'
import useCollapse from 'react-collapsed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';


const Employer_tab = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <div className='employer_tab'>
      <div className="image">
        <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg' alt='' />
      </div>
      <div className="information">
        <h3>Chief Bailey</h3>
        <span>Product Manager</span>
        <div className="collapsibles">
          <div className="header" {...getToggleProps()}>
            Details
          </div>
          <div {...getCollapseProps()}>
            <div className="content">
              <div className="birthday">
                <CalendarMonthIcon />
                <span>12-22-1999</span>
              </div>
              <div className="email">
                <MailIcon />
                <span>bailey@gmail.com</span>
              </div>
              <div className="location">
                <LocationOnIcon />
                <span>Kolkata</span>
              </div>
              <div className="work">
                <WorkIcon />
                <span>ABC Company</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Employer_tab