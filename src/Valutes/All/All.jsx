

import { Link } from 'react-router-dom';
import Valute from './Valute';  



function All(props) {
    return (
        <div className="all"> 
            {
                Object.keys(props.valutes).map(function (key) {
                    return (
                        <Link to='/Valutes/Current'
                            key={props.valutes[key].ID + Math.random()}>
                            <Valute
                                id={key}
                                charCode={props.valutes[key].CharCode}
                                value={props.valutes[key].Value}
                                previous={props.valutes[key].Previous}
                                name={props.valutes[key].Name}
                                onClick={current => props.onClick(current)} 
                            />
                        </Link>
                    );
                })
            }
        </div>
    );
}



export default All;