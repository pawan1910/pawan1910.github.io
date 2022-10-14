import React , {Component, useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import Chart from 'react-apexcharts';


const  Api =()=> {
  // const[show,appShow] = useState(true);
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
      const age = [];
      const salary = [];

      axios.get("https://dummy.restapiexample.com/api/v1/employees").then(response =>{
          console.log("response", response)
          response.data.data.map(item => {
            console.log("item", item)
              age.push(item.employee_age);
              salary.push(item.employee_salary)
          })
          setCategory(salary)
          setData(age)
          
          console.log("age", age, salary)
      }).catch(e => {
          // alert(e);
      })
  }, [])
  
    return (
      <div>
        {/* <button className='api-btn' onClick={() => appShow(!show)}>Api:{show? 'show': 'hide'}</button> */}
        {/* {show && */}
      <Chart options={{
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: category,
          title: {
            text: 'Month'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature'
          },
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        title: {
          text: 'Line Chart',
          align: 'left'
        
      }} }
      series={[{
        name: 'series-1',
        data: data
      }]} type="line" width={800} height={500} />
    

    </div>
    )
}


export default Api;
