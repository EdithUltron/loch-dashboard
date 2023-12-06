import React,{useState} from 'react'
import bell from "../imgs/bellb.svg"
import chart from "../imgs/chart.svg"
import clock from "../imgs/clock.svg"
import "./Notification.css"
import { Checkbox } from "antd";


const Notification = ({ type }) => {
    
    const [checked, setchecked] = useState(true);

    const types = {
      1: {
        image: bell,
        msg: "We’ll be sending notifications to you here",
      },
      2: {
        image: chart,
        msg: "Notify me when any wallets move more than",
      },
      3: {
        image: clock,
        msg: "Notify me when any wallet dormant for",
      },
    };

  return (
    <div className='nfy'>
      {type === "1" && (
        <>
          <div className='nfy__header'>
            <img src={types[type].image} alt='bell' />
            <div className='nfy__hr'>Save</div>
          </div>
          <div className='nfy__body'>{types[type].msg}</div>
          <div className='nfy__footer'>
            <div className='nfy__box'>hello@gmail.com</div>
          </div>
        </>
      )}
      {type === "2" && (
        <>
          <div className='nfy__header'>
            <img src={types[type].image} alt='chart' />
            <Checkbox
              checked={checked}
              onChange={() => setchecked(!checked)}></Checkbox>
          </div>
          <div className='nfy__body b1'>{types[type].msg}</div>
          <div className='nfy__footer f1'>
            <select name='price' id='price'>
              <option value='$1,000.00'>$1,000.00</option>
              <option value='$2,000.00'>$2,000.00</option>
              <option value='$3,000.00'>$3,000.00</option>
            </select>
          </div>
        </>
      )}
      {type === "3" && (
        <>
          <div className='nfy__header'>
            <img src={types[type].image} alt='clock' />
            <Checkbox
              checked={checked}
              onChange={() => setchecked(!checked)}></Checkbox>
          </div>
                  <div className='nfy__body b3'>
                      
                      {types[type].msg}
          </div>
          <div className='nfy__footer f2'>
            <select name='days' id='days'>
              <option value='> 30 days'> &gt; 30 days</option>
              <option value='30 days'>30 days</option>
              <option value='< 30 days'>&lt; 30 days</option>
                      </select>
                      <div className="footer__end">
                          becomes active
                      </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notification
