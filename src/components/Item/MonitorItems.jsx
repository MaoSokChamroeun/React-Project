import React from 'react'
import './ItemsCss/Monitor.css'
import { Link, NavLink } from 'react-router-dom'
const MonitorItmes = (props) => {
  return (
    <div className='monitor ' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <div className='monitor-infor mt-2'>
      <div className='monitor-item  d-flex flex-column align-items-center'>
            <Link to={`/productdisplaymonitor/${props.monitor_id}`}><img onClick={window.scrollTo(0,0)} src={props.monitor_image} alt='' width={300}/></Link>
            <h3 className='fs-6'>{props.monitor_name}</h3>
      </div>
      <button className='btn-learn-more monitor-btn'>
          <NavLink to='/monitorproduct' className='fw-500'>LEARN MORE</NavLink>
      </button>
      </div>
    </div>
  )
}

export default MonitorItmes
