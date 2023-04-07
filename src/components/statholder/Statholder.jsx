

import { useState, useEffect } from 'react'
import axios from 'axios'
import {Linebtns} from '../linebuttons/Linebutton'
import {Greetings} from '../greetings/Greeting'
import LineChart from '.././line/LineChart'
import {Geostatholder, Sourcestatholder} from '.././namedstat/Namedstat'
import {Dough} from '.././doughnut/Doughnut'
import './statholder.css'

export const Statholder = () => {

    // chartLabel ia an array of dates => LineChart => rep'd as label here
    // chartData is an array of view values => LineChart => rep'd as data here

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
        setLoading(true);   // remove no need since it exist above
        const API = "https://fe-task-api.mainstack.io";
        let source = axios.CancelToken.source();

        const getData = async() => {
            
            try{
                const response = await axios.get(API, {
                    cancelToken: source.token,
                });
                const result = response.data;
                const output = Object.values(result);
                // console.log(output)

                let viewsData = output[0].views;
                // console.log(viewsData)

                // getlocation
                let geoData = output[1];
                // console.log(geoData);
                let country = [];
                let countryCount = [];
                // let countryPercent = [];
                geoData.forEach((geo, i) => {
                    country.push(geo.country)
                    countryCount.push(geo.count)
                    // countryPercent.push(geo.percent)
                })

                // getsource
                let mediaData = output[2];
                // console.log(mediaData);
                let mediaSource = [];
                let mediaCount = [];
                // let mediaPercent = [];
                mediaData.forEach((media) => {
                    mediaCount.push(media.count)
                    mediaSource.push(media.source)
                    // mediaPercent.push(media.percent)
                })

                // views
                setViews(prev => prev = Object.values(viewsData))
                // console.log(views)
                setViewDate(prev => prev =Object.keys(viewsData))
                // console.log(viewDate)

                // location
                setLocation(prev => prev = country)
                // console.log(country)
                setLocationCount(prev => prev = countryCount)
                // console.log(countryCount)
                setLocationHolder(prev => prev = geoData)
                // console.log(countryPercent)

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
            console.log('unmounting')
            source.cancel('Previouis request cancelled');
        }
    }, [])


    // console.log(views)
    // console.log(viewDate)
    // console.log(location)
    // console.log(locationCount)
    console.log(locationHolder)
    // console.log(sourceMedia)
    // console.log(sourceCount)
    console.log(sourceHolder)
    // console.log(isLoading)

    const geoArray = ['rgb(89,170,234)', 'rgb(132,79,246)', 'rgb(15,183,122)', 'rgb(250,183,10)', 'rgb(240, 148, 104)']
    const sourceArray = ['rgb(89,158,234)', 'rgb(132,79,246)', 'rgb(15,183,122)', 'rgb(250,183,10)', ]


    return (
        <div className="statholder">
            <Greetings />
            {/* <Linebtns /> */}
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