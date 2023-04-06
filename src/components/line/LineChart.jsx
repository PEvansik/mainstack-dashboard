
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

import 'chartjs-adapter-date-fns';
import './linechart.css'
import info from '../asset/geomedia/info.svg'

ChartJS.register(
    LineElement, 
    PointElement, 
    LinearScale, 
    CategoryScale, 
    TimeScale, 
    Filler 
);


function LineChart ({chartLabel, chartData, loader}) {



// chartLabel should be put in place of label's value
// chartData should be used in place of data's values

    // console.log(chartLabel)
    // console.log(chartData)
    const totalViews = chartData.reduce((a, c) => a + c, 0)

    const data = {
        labels: chartLabel,
        datasets: [{
            label: 'Views',
            data: chartData,
            backgroundColor: 'transparent',
            borderColor: '#FF5403',
            fill: {
                target: 'origin',
                above: '#FF540347',   // Area will be red above the origin
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
                max: 105,
                ticks: {
                    stepSize: 5,
                    callback: (value) => value
                },
                grid: {
                    // borderDash: [10, 4],
                    borderDash: [6],
                    // color: "#348632"
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
                grid: {
                    display: false ,
                    drawBorder: false,
                    border: false,

                }
            },
            
        },
        maintainAspectRatio: false,
    }

    // style={{    
    //     width: '100%',
    //     height: '100%'}}

    return (
        <div className="views">
            <div className="page-views-holder">
                <h2 className='page-views'>Page Views</h2>
                <div className='page-views-img'><img src={info} alt="info-icon" /></div>
            </div>
            <div className="all-time">
                <p className='all-time-p'>All time</p>
            </div>

            <h2 className="views-total">{totalViews}</h2>
            <div className="chart-box">
                <div className="linechart" >
                    {loader ? <p className='loading'>Loading...</p> : <Line data={data} options={options} className='line'></Line>}
                </div>
            </div>

        </div>
    )
}


export default LineChart;