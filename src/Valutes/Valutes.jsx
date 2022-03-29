import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Current from './Current/Current'; 
import './styles/Valutes.css';
import Table from './Table';

class Valutes extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            error: null,
            isLoaded: false,
            data: null,
            current: null
        };
    }



    componentDidMount() {
        this.state.current = sessionStorage.getItem('current'); /* получаем состояние для текущей сессии */

        fetch("https://www.cbr-xml-daily.ru/daily_json.js")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    handleClick(current) {
        this.setState({ current: current });
        sessionStorage.setItem('current', current); /* сохраняем состояние для текущей сессии */
    }

    handleClickReset() {
        this.setState({ current: null });
        sessionStorage.setItem('current', null); /* сохраняем состояние для текущей сессии */
    }

    render() {
        const { error, isLoaded, data, current } = this.state;
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Загрузка...</div>;
        } else {
            let valutes = data.Valute;
            return (
                <div className='valutes'>
                    <Link to='Table' className='navlink' onClick={() => this.handleClickReset()}><span>Загрузить все валюты</span></Link>

                    <Routes>
                        <Route path="Table" element={
                            <Table
                                //передаём значения для Table --> Body --> All
                                valutes={valutes}
                                onClick={current => this.handleClick(current)}  
                            />}
                        />
                        <Route path="Current" element={
                            <Current
                                //передаём значения для Table --> Body --> (All) --> Current
                                data={data}
                                current={current} />} /> 
                    </Routes>

                </div>
            )
        }
    }
}



export default Valutes;