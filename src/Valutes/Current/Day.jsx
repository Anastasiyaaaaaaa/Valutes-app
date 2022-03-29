import DayItem from "./DayItem";

function Day(props) {

  return (
    <div className="day"> 
      <DayItem
        id={"Day" + props.id}
        tooltip1={"Дата: " + props.date}
        tooltip2={props.name}
        charCode={props.charCode}
        value={props.value}
        previous={props.previous}
        key={Math.random()}
      />

    </div>
  );
}



export default Day;