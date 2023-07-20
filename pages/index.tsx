import Head from 'next/head'

//Style
import divStyle from './../styles/main.module.css';
import status from './../styles/status.module.css'

//Components
import { SearchBar, Status } from './../components/SearchBar'
import { Forecast } from "./../components/Forcasts";
import { Wind, Humidity, SunriseAndSunset } from './../components/Status'

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather</title>
        <meta name="description" content="Weather information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  >
        <div className={divStyle.maindiv}>
          <div className={divStyle.divOne}>
            <SearchBar />
            <Status />
          </div>
          <div className={divStyle.divTwo}>
            <div></div>
            <Forecast />
            <h1 style={{ marginLeft: '25px', color: 'white' }}>Today's Highlights</h1>
            <div className={status.todayStatus}  >
              <Wind />
              <Humidity />
              <SunriseAndSunset />
              <Humidity />            
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
