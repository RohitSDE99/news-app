import React from 'react'
import './Options.css'

const Options = (props) => {
  return (
    <div className="options" onClick={() => props.setsearchContent(props.category)}>
    {props.category}
    </div>
  )
}
export default Options