
import './namedstat.css'
import fb from '../asset/geomedia/fb.svg'
import finland from '../asset/geomedia/finland.svg'
import geermany from '../asset/geomedia/germany.svg'
import ghana from '../asset/geomedia/ghana.svg'
import Instagram from '../asset/geomedia/Instagram.svg'
import linked from '../asset/geomedia/linked.svg'
import nig from '../asset/geomedia/nig.svg'
import google from '../asset/geomedia/google.svg'
import uk from '../asset/geomedia/uk.svg'



export const Namedstat = ({countrymedia, stat, icon, altText, bgcol}) => {

    return (
        <div className="namedstat">
            <div className="namedstat-container">
                <div className='named-img'>
                    <img src={icon} alt={altText} />
                </div>
                <p className='conmed-name'>{countrymedia}</p>
                <p className='conmed-stat'>{stat}%</p>
                <span className="statcolor" style={
                    {
                        backgroundColor: `${bgcol}`
                    }
                }></span>
            </div>
        </div>
    )
}


export const Geostatholder = ({geolo, geoStats}) => {


    ['rgb((89,158,234)', 'rgb(132,79,246)', 'rgb(15,183,122)', 'rgb(250,183,10)', 'rgb(240, 148, 104)']

    return (
        <div className="namedstatholder">
            <div className="statholder-container">
                {geolo.map((geo, i) => {
                    return (<Namedstat 
                    key={geo.country}
                    countrymedia={geo.country}
                    stat={geo.percent}
                    icon={(() => {
                        if(geo.country == 'Nigeria') {
                            return nig
                         }else if(geo.country == 'Ghana') {
                             return ghana
                         }else if (geo.country == 'Germany') {
                             return geermany
                         }else if (geo.country == 'Finland') {
                             return finland
                         }else {
                             return uk
                         }
                    })()}    
                    altText={geo.country}
                    bgcol={(() => {
                        if(geo.country == 'Nigeria') {
                            return '#599EEA'
                         }else if(geo.country == 'Ghana') {
                             return '#844FF6'
                         }else if (geo.country == 'Germany') {
                             return '#0FB77A'
                         }else if (geo.country == 'Finland') {
                             return '#FAB70A'
                         }else {
                             return '#F09468'
                         }
                    })()}  
                    />)})}
            </div>
        </div>
    )
}
export const Sourcestatholder = ({mediaSource, mediaStats}) => {




    console.log(mediaSource)


    return (
        <div className="namedstatholder">
            <div className="statholder-container">
                {/* use an array to create this */}
                {mediaSource.map((media, i) => {
                    return (<Namedstat 
                        key={media.source}
                    countrymedia={media.source}
                    stat={media.percent}
                    icon={(() => {
                        if(media.source == 'google') {
                            return google
                         }else if(media.source == 'instagram') {
                             return Instagram
                         }else if (media.source == 'facebook') {
                             return fb
                         }else if (media.source == 'linkedin') {
                             return linked
                         }else {
                             return '#F09468'
                         }
                    })()} 
                    altText={media.source}
                    bgcol={(() => {
                        if(media.source == 'google') {
                            return '#599EEA'
                         }else if(media.source == 'instagram') {
                             return '#844FF6'
                         }else if (media.source == 'facebook') {
                             return '#0FB77A'
                         }else if (media.source == 'linkedin') {
                             return '#FAB70A'
                         }else {
                             return '#F09468'
                         }
                    })()} 
                    />)})}
            </div>
        </div>
    )
}

