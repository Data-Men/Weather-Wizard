import { FaSearch } from 'react-icons/fa'
import { BiCurrentLocation, BiCloud, BiCloudRain } from 'react-icons/bi'
import searchBarStyle from './../styles/searchBar.module.css'
import rainyDay from './../public/rainy-day.png'
import newyouk from './../public/nyc3.jpg';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const SearchBar = ({ setWeatherData }) => {

    //location icon style
    const locStyle = {
        backgroundColor: '#95afc033',
        borderRadius: "60%",
        padding: '6px',
        height: '28px',
        width: '28px',
        marginLeft: '1rem',
    }

    interface loactionData {
        lat: string,
        lon: string
    }
    const [city, updateCity] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    const getData = async (city: string) => {
        try {
            const corrdinates = await axios.get<loactionData[]>(`https://nominatim.openstreetmap.org/search?q=${city || 'jaipur'}&format=json`);

            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${corrdinates.data[0].lat}&lon=${corrdinates.data[0].lon}&appid=${process.env.WEATHER_API_SECRET}`);

            console.log("Weatherdata:", response.data);
            setWeatherData(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    return (<div className={searchBarStyle.search} >
        <FaSearch style={{
            height: '28px',
            width: '28px',
            marginRight: '1rem',
        }}
            onClick={() => inputRef.current && inputRef.current.focus()} />
        <input
            ref={inputRef}
            type='text'
            placeholder='Search for places ...'
            value={city}
            onKeyDown={(e) => {
                if (e.key == 'Enter') {
                    getData(city);
                }
            }}
            onChange={(e) => { updateCity(e.target.value) }}
            className={searchBarStyle.inputBox} />
        <BiCurrentLocation style={locStyle} onClick={() => { inputRef.current && inputRef.current.focus(); }} />
    </div>)

}



const Status = ({ todayData }) => {

    console.log(todayData?.list[0]);

    if (todayData !== null)
        return <div className={searchBarStyle.status}>
            <img className={searchBarStyle.image} src={rainyDay.src} alt="rainyDay" />
            <h1 className={searchBarStyle.temp}>{(todayData.list[0].main.temp - 273.15).toFixed(2)}<sup>&#8451;</sup></h1>
            <h3 className={searchBarStyle.day}>{`${moment().format('dddd')}`.concat(`, ${moment().format('HH:mm')}`)}</h3>
            <hr className={searchBarStyle.solid}></hr>
            <div className={searchBarStyle.info}><BiCloud /> {String(todayData.list[0].weather[0].description).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
            </div>
            <div className={searchBarStyle.info}><BiCloudRain /> Rain-30%</div>
            <div className={searchBarStyle.cityImage}>
                <img style={{
                    height: '100%',
                    width: '100%',
                    border: 'none',
                    borderRadius: '10px',
                }} src={newyouk.src} />
                <div className={searchBarStyle.cityName}>{todayData.city.name}</div>
            </div>
        </div>
}

export { SearchBar, Status }