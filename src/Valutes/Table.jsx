import Body from "./Body";
import Head from "./Head"; 
function Table(props) { 
    return (
        <div className="valutes-table">
            <Head />
            <Body 
            valutes={props.valutes} 
            onClick={current => props.onClick(current)}   
            />
             

        </div>
    );
}



export default Table;