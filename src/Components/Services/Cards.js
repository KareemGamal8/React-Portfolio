import React, { Fragment } from 'react'
import './Services.css'
export default function Cards({title, desc, icon}) {
  return (
    <Fragment>
        <i className={icon}></i>
        <div className='card-title'>{title}</div>
        <div className='card-desc'>{desc}</div>
    </Fragment>
  )
}
