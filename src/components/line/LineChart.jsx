
import { Line } from 'react-chartjs-2';
import { 
    Chart as ChartJS, 
    LineElement, 
    PointElement, 
    LinearScale, 
    CategoryScale, 
    TimeScale, 
    Filler 
} from 'chart.js';
import { useState } from 'react';

import 'chartjs-adapter-date-fns';
import './linechart.css'
import '../linebuttons/linebutton.css'
import info from '../asset/geomedia/info.svg'
import {Linebtns} from '../linebuttons/Linebutton'

ChartJS.register(
    LineElement, 
    PointElement, 
    LinearScale, 
    CategoryScale, 
    TimeScale, 
    Filler 
);


function LineChart ({chartLabel, chartData, loader}) {
    const[filtered, setFiltered] = useState([])
    const[display, setDisplay] = useState('')

    const totalViews = chartData.reduce((a, c) => a + c, 0);

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


    // const day1 = [
    //     {x: Date.parse('2022-07-30 00:00:00 GMT+0100'), y: 1},
    //     {x: Date.parse('2022-08-13 00:00:00 GMT+0100'), y: 198},
    // ]
    // const day3 = [
    //     {x: Date.parse('2022-07-30 00:00:00 GMT+0100'), y: 1},
    //     {x: Date.parse('2022-08-06 00:00:00 GMT+0100'), y: 26},
    //     {x: Date.parse('2022-08-13 00:00:00 GMT+0100'), y: 172},
    // ]
    // const week = [
    //     {x: Date.parse('2022-07-31 00:00:00 GMT+0100'), y: 1},
    //     {x: Date.parse('2022-08-01 00:00:00 GMT+0100'), y: 13},
    //     {x: Date.parse('2022-08-02 00:00:00 GMT+0100'), y: 33},
    //     {x: Date.parse('2022-08-03 00:00:00 GMT+0100'), y: 152},
    // ]
    // const month = [
    //     {x: Date.parse('2022-07-31 00:00:00 GMT+0100'), y: 1},
    //     {x: Date.parse('2022-08-01 00:00:00 GMT+0100'), y: 3},
    //     {x: Date.parse('2022-08-02 00:00:00 GMT+0100'), y: 3},
    //     {x: Date.parse('2022-08-03 00:00:00 GMT+0100'), y: 7},
    //     {x: Date.parse('2022-08-04 00:00:00 GMT+0100'), y: 8},
    //     {x: Date.parse('2022-08-05 00:00:00 GMT+0100'), y: 5},
    //     {x: Date.parse('2022-08-06 00:00:00 GMT+0100'), y: 20},
    //     {x: Date.parse('2022-08-07 00:00:00 GMT+0100'), y: 50},
    //     {x: Date.parse('2022-08-08 00:00:00 GMT+0100'), y: 100},
    //     {x: Date.parse('2022-08-09 00:00:00 GMT+0100'), y: 2},
    // ]

    // const
    const filterItem = [day1, day3, week, month]

    const getViews = (e) => {
        // console.log(e.currentTarget.id)
        // console.log(e.target.innerText)
        // console.log(e)
        // console.log(filterItem.filter((item, index) => (index === +e.currentTarget.id))) 
        setFiltered(filterItem.filter((item, index) => (index === +e.currentTarget.id)))   
        setDisplay(e.target.innerText)
    }
    // console.log(filtered)

    // console.log(display.length)

    const data = {
        // labels: chartLabel,
        datasets: [{
            label: 'Views',
            data: filtered.length < 1 ? day1 : filtered[0] ,
            backgroundColor: 'transparent',
            borderColor: '#FF5403',
            fill: {
                target: 'origin',
                above: '#FF540337',   // Area will be red above the origin
                below: '#ffffff47'    // And blue below the origin
              },
            pointBorderColor: 'grey',
            pointBorderWidth: 0.1,
            tension: 0.01,
            
        }],
        backgroundColor: 'orange'
    }

    const options = {
        plugins: {
            responsive: true,
            legend: false
        },
        scales: {
            y: {
                min: 0,
                max: filtered.length < 1 ? 105 : 199,
                // ticks: {
                //     stepSize: 20,
                //     callback: (value) => value
                // },
                border: {
                    display: false,
                    dash: [6, 10]
                },
                grid: {
                    drawTicks: false,
                  }
                // gridLines: {
                //     borderDash: [8, 4],
                //     color: "#348632"
                // }
            },
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                    parser: 'yyyy-MM-dd'
                },
                border: {
                    display: false,
                },
                grid: {
                    display: false ,
                }
            },
            
        },
        maintainAspectRatio: false,
    }

    // style={{    
    //     width: '100%',
    //     height: '100%'}}



    return (
        <div className="button-and-views">

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

            </div>


            <div className="views">
                <div className="page-views-holder">
                    <h2 className='page-views'>Page Views</h2>
                    <div className='page-views-img'><img src={info} alt="info-icon" /></div>
                </div>
                <div className="all-time">
                    <p className='all-time-p'>{display.length < 1 ? `All time` : display}</p>
                </div>

                <h2 className="views-total">{totalViews}</h2>
                <div className="chart-box">
                    <div className="linechart" >
                        {loader ? <p className='loading'>Loading...</p> : <Line data={data} options={options} className='line'></Line>}
                    </div>
                </div>

            </div>
        </div>
    )
}


export default LineChart;



export const Button = ({id, qty, filterViews}) => {
    return(
        <div className="filter" id={id} onClick={(e) => filterViews(e)}>
            <button className='filter-btn' >{qty}</button>
        </div>
    )
}