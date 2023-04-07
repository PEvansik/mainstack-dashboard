

import './linebutton.css'


export const Linebtns = ({custom, getViews}) => {



    const day1 = [
        {x: Date.parse('2022-07-31 00:00:00 GMT+0100'), y: 1},
        {x: Date.parse('2022-08-01 00:00:00 GMT+0100'), y: 3},
        {x: Date.parse('2022-08-02 00:00:00 GMT+0100'), y: 3},
        {x: Date.parse('2022-08-03 00:00:00 GMT+0100'), y: 7},
        {x: Date.parse('2022-08-04 00:00:00 GMT+0100'), y: 8},
        {x: Date.parse('2022-08-05 00:00:00 GMT+0100'), y: 5},
        {x: Date.parse('2022-08-06 00:00:00 GMT+0100'), y: 20},
        {x: Date.parse('2022-08-07 00:00:00 GMT+0100'), y: 50},
        {x: Date.parse('2022-08-08 00:00:00 GMT+0100'), y: 100},
        {x: Date.parse('2022-08-09 00:00:00 GMT+0100'), y: 2},
    ]
    const day3 = [
        {x: Date.parse('2022-07-31 00:00:00 GMT+0100'), y: 1},
        {x: Date.parse('2022-08-01 00:00:00 GMT+0100'), y: 13},
        {x: Date.parse('2022-08-02 00:00:00 GMT+0100'), y: 33},
        {x: Date.parse('2022-08-03 00:00:00 GMT+0100'), y: 152},
    ]
    const week = [
        {x: Date.parse('2022-07-30 00:00:00 GMT+0100'), y: 1},
        {x: Date.parse('2022-08-06 00:00:00 GMT+0100'), y: 26},
        {x: Date.parse('2022-08-13 00:00:00 GMT+0100'), y: 172},
    ]
    const month = [
        {x: Date.parse('2022-07-30 00:00:00 GMT+0100'), y: 1},
        {x: Date.parse('2022-08-06 00:00:00 GMT+0100'), y: 196},
        {x: Date.parse('2022-08-13 00:00:00 GMT+0100'), y: 2},
    ]

    const filterItem = [day1, day3, week, month]
    const timp = []
    const clime = [[1, 4], [3, 6], [4, 9], [5, 0]]
    const tina = [ 3, 8, 9, 3]

    // function finder(x, arr) {
    //     console.log(arr.filter((item, index) => (index === +x.target.id)))
    // }



    // const getViews = (e) => {
    //     filterItem.filter((item, index) => (index === +e.currentTarget.id))
    // }
    

    return(
        <div className="line-btn">
            <Button 
                id={0}
                qty='1 Day'
                filterViews={getViews}
            />
            <Button 
                id={1}
                qty='3 Days'
                filterViews={getViews}
            />
            <Button 
                id={2}
                qty='7 Days'
                filterViews={getViews}
            />
            <Button 
                id={3}
                qty='30 Days'
                filterViews={getViews}
            />
            <Button 
                id={0}
                qty='All Time'
                filterViews={getViews}
            />
            <Button 
                id={0}
                qty='Custom Date'
                filterViews={getViews}
            />
            <button id={0}></button>
            {/* <button id={1} className="days-btn">1 Day</button>
            <button id={3} className="days-btn">3 Days</button>
            <button id={7} className="days-btn">7 Days</button>
            <button id={30} className="days-btn">30 Days</button>
            <button id={100} className="days-btn">All Tiime</button>  
            <button id={1000} className='days-btn custom-date'>Custom Date</button> */}
        </div>
    )
}


export const Button = ({id, qty, filterViews}) => {
    return(
        <div className="filter" id={id} onClick={(e) => filterViews(e)}>
            <button className='filter-btn'>{qty}</button>
        </div>
    )
}