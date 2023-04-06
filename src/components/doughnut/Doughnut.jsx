import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import './doughnut.css'

ChartJS.register(
    ArcElement, 
    Tooltip, 
    Legend, 
    
);

export const Dough = ({geoSource, geoSourceStat, bgColor}) => {


    const data =  {
        labels: geoSource,
        datasets: [{
            label: 'Country',
            data: geoSourceStat,
            backgroundColor: bgColor,
            borderColor: 'transparent'
        }]
    }

    const options = {
        plugins: {
            responsive: true,
            maintainAspectRatio: false,
            legend: false
        },
        cutout: 50
    }

    return (
        <div className="doughnut">
            <div className="doughnut-container">
                <div className="doughnut-holder">
                    <Doughnut data={data} options={options} className='snack'></Doughnut>
                </div>
            </div>
        </div>
    )
}