import All from "./All/All";
import Current from "./Current/Current";

function Body(props) {

    return (
        <div className="container-body">
            <All
                valutes={props.valutes}
                onClick={current => props.onClick(current)}
            />  
        </div>
    );
}



export default Body;