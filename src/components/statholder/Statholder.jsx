

import { useState, useEffect } from 'react'
import axios from 'axios'
import {Greetings} from '../greetings/Greeting'
import LineChart from '.././line/LineChart'
import {Geostatholder, Sourcestatholder} from '.././namedstat/Namedstat'
import {Dough} from '.././doughnut/Doughnut'
import './statholder.css'

export const Statholder = () => {


    const [views, setViews] = useState([]);
    const [viewDate, setViewDate] = useState([]);
    const [location, setLocation] = useState([]);
    const [locationCount, setLocationCount] = useState([]);
    const [locationHolder, setLocationHolder] = useState([])
    const [sourceMedia, setSourceMedia] = useState([]);
    const [sourceCount, setSourceCount] = useState([]);
    const [sourceHolder, setSourceHolder] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        const API = "https://fe-task-api.mainstack.io";
        let source = axios.CancelToken.source();

        const getData = async() => {
            
            try{
                const response = await axios.get(API, {
                    cancelToken: source.token,
                });
                const result = response.data;
                const output = Object.values(result);

                let viewsData = output[0].views;

                let geoData = output[1];
                let country = [];
                let countryCount = [];
                geoData.forEach((geo, i) => {
                    country.push(geo.country)
                    countryCount.push(geo.count)

                })
                let mediaData = output[2];
                let mediaSource = [];
                let mediaCount = [];
                mediaData.forEach((media) => {
                    mediaCount.push(media.count)
                    mediaSource.push(media.source)
                })

                setViews(prev => prev = Object.values(viewsData))
                setViewDate(prev => prev =Object.keys(viewsData))
                setLocation(prev => prev = country)
                setLocationCount(prev => prev = countryCount)
                setLocationHolder(prev => prev = geoData)

                setSourceMedia(prev => prev = mediaSource)
                setSourceCount(prev => prev = mediaCount)
                setSourceHolder(prev => prev = mediaData)


                setLoading(false);
            }catch(err) {
                if(axios.isCancel(err)) {
                    console.error('caught axios error: ', err)
                }else {
                    console.log(err);
                }
            }
        };
        getData();

        return () => {
            source.cancel('Previouis request cancelled');
        }
    }, [])


    const geoArray = ['rgb(89,170,234)', 'rgb(132,79,246)', 'rgb(15,183,122)', 'rgb(250,183,10)', 'rgb(240, 148, 104)']
    const sourceArray = ['rgb(89,158,234)', 'rgb(132,79,246)', 'rgb(15,183,122)', 'rgb(250,183,10)', ]


    return (
        <div className="statholder">
            <Greetings />
            < LineChart 
                chartLabel={viewDate}
                chartData={views}
                loader={isLoading}/>

            <div className="location-source">
                <div className="location-media-container">
                    <div className="medcon-header">
                        <h3>Top Locations</h3>
                        <p><a href="#">View full reports</a></p>
                    </div>
                    <div className="location-media-result">
                        <Geostatholder 
                            geolo={locationHolder}
                            geoStats={location} />
                        <Dough 
                            geoSource={location}
                            geoSourceStat={locationCount}
                            bgColor={geoArray}/>
                    </div>
                </div>

                <div className="location-media-container">
                    <div className="medcon-header">
                        <h3>Top Referral source</h3>
                        <p><a href="#">View full reports</a></p>
                    </div>

                    <div className="location-media-result">
                        <Sourcestatholder 
                            mediaSource={sourceHolder}
                            mediaStats={sourceMedia}/>
                        <Dough 
                            geoSource={sourceMedia} 
                            geoSourceStat={sourceCount}
                            bgColor={sourceArray}/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Statholder;