import { FaSun,FaCloudSunRain,FaCloud,FaCloudRain,FaCloudSun } from "react-icons/fa6";
import { BiCurrentLocation, BiCloud, BiCloudRain,BiSun,BiSolidCloud } from 'react-icons/bi'

import week from './../styles/weekDay.module.css'

export default ({ Day }: { Day: string }) => {
    const iconStyle = {
        height: '60%',
        width: '60%',
        color:'orange'
    }
    return <>
        <div className={week.day}>
            <p>{Day}</p>
            <BiSolidCloud style={iconStyle} />
            <p>15&#xb0; 12&#xb0;</p>
        </div>
    </>
}