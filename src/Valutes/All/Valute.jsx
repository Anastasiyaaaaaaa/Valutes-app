
import ValuteItem from './ValuteItem';
import '../styles/Valute.css';

function Valute(props) {



  return ( 
      <div className="valute" onClick={() => props.onClick(props.charCode)}>

        <ValuteItem 
          id={"Valute"+props.id}
          charCode={props.charCode}
          value={props.value}
          previous={props.previous}
          tooltip={props.name}
          key={Math.random()}
        />
      </div> 
  );
}



export default Valute;