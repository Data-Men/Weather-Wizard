import WeekDay from "./WeekDay";
export function Forecast() {
    return (<>
        <div style={{ display: 'flex', height:'20%',margin:'20px 20px 20px 20px' }}>
            <WeekDay Day={"Sun"} />
            <WeekDay Day={"mon"} />
            <WeekDay Day={"Tus"} />
            <WeekDay Day={"Wed"} />
            <WeekDay Day={"Thr"} />
        </div>

    </>)
}