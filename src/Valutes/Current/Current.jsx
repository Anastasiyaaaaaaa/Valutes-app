
import React, { useState, useEffect } from "react"
import Day from './Day';
import Head from "../Head";



function Current(props) {

  const current = props.current;
  const prevUrl = props.data.PreviousURL;
  const name = props.data.Valute[current].Name;

  const today = new Date(props.data.Date);
  const todaysValue = props.data.Valute[current].Value;
  const yesterdayValue = props.data.Valute[current].Previous;

  let initialData = [ /* начальное значение */
    {
      date: today,
      value: todaysValue,
      prevValue: yesterdayValue
    }
  ];

  const [Data, setData] = useState(initialData);


  useEffect(() => {
    const fetchData = async (PreviousURL) => {
      let result = [];
      let diff;
      
      do {
        let valute = {};
        
        
        try {
          const response = await fetch(PreviousURL);
          const json = await response.json();


          let prevDate = new Date(json.Date);

          diff = (today - prevDate) / (60 * 60 * 24 * 1000);

          if (diff <= 10) {
            let value = json.Valute[current].Value;
            let prevValue = json.Valute[current].Previous;

            valute.date = prevDate;
            valute.value = value;
            valute.prevValue = prevValue;


            result.push(valute);

            PreviousURL = json.PreviousURL;
            console.log(valute)
          }
        }
        catch (error) {
          console.log("error", error);
        }


      } while (diff <= 10);

      return result;
    };

    fetchData(prevUrl)
      .then(result => {
       // console.log(result)
        setData(Data.concat(result))
      }
      )
  }, []);


  //console.log(Data)
  return (

    <div className="current">
      <Head />
      {
        Object.keys(Data).map(function (key) {
          return (
            <Day
              id={key}
              name={name}
              charCode={props.current}
              value={Data[key].value}
              previous={Data[key].prevValue}
              date={Data[key].date.toLocaleString("ru")}
              key={Math.random()}
            />);
        })
      }
    </div>
  );
}



export default Current;