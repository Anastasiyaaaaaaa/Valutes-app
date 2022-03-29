 
import ReactTooltip from "react-tooltip";
import '../styles/Item.css';

function arrow(current, previous) {
    let result = '';
    if (current > previous) result = '🠕 ';
    else if (current < previous) result = '🠗 ';
    return result;
  }
  
  
  function Item(props) {
    return (
      <div className="item"> 
        <ul> 
          <li><span data-tip data-for={props.id}>{props.charCode}</span></li>
          <li>{props.value}</li>
          <li>
            {arrow(props.value, props.previous)}
            {Math.abs(((props.previous / props.value - 1) * 100).toFixed(2))} %</li> 
        </ul> 
        <ReactTooltip id={props.id} place="bottom">
          {props.tooltip}
        </ReactTooltip>
      </div>
    );
  }
  
  
  
  export default Item;