import React from 'react'
import "./Testimonal.css"

const Testimonal = ({name,role,msg}) => {
  return (
    <div className='test'>
          <div className="top">
              <div className="tl">{name}</div>
              <div className="tr">{role}</div>
      </div>
          <div className="bottom">{ msg}</div>
    </div>
  )
}

export default Testimonal
