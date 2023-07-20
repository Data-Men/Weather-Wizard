import { BiDirections } from "react-icons/bi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

//style
import status from './../styles/status.module.css'

export function Wind() {
    return <div className={status.gridItem}>
        <h5 style={{}}>Widn Status</h5>
        <p>7.70 <sub>km/h</sub></p>
        <span><BiDirections /> N-E</span>
    </div>
}

export function SunriseAndSunset() {
    return (<div className={status.gridItem}>
        <h5>Sunrise & Sunset</h5>
        <span><FaArrowUp /> 6:30Am</span>
        <span><FaArrowDown /> 7:30Pm</span>
    </div>)
}

export function Humidity() {
    return (<div className={status.gridItem}>
        <h5>Humidity</h5>
        <span>12%   </span>
        <h5>👍 Normal</h5>
    </div>)
}