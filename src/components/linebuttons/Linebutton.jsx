

import './linebutton.css'


export const Linebtns = () => {

    return(
        <div className="line-btn">
            <button id={1} className="days-btn">1 Day</button>
            <button id={3} className="days-btn">3 Days</button>
            <button id={7} className="days-btn">7 Days</button>
            <button id={30} className="days-btn">30 Days</button>
            <button id={100} className="days-btn">All Tiime</button>  
            <button id={1000} className='days-btn custom-date'>Custom Date</button>
        </div>
    )
}