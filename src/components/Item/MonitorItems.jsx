import React from 'react'
import './ItemsCss/Monitor.css'
import { Link } from 'react-router-dom'
const MonitorItmes = (props) => {
  return (
    <div className='monitor'>
      <div className='monitor-item  d-flex flex-column align-items-center'>
            <Link to='/monitorproduct'><img onClick={window.scrollTo(0,0)} src={props.monitor_image} alt='' width={350}/></Link>
            <h3 className='fs-6'>{props.monitor_name}</h3>
      </div>
      <button className='btn-learn-more tuf'>
          <a href='/monitorproduct'>LEARN MORE</a>
      </button>
    </div>
  )
}

export default MonitorItmes
