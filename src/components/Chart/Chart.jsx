import React, { useState,useEffect } from 'react'
import {fetchDailyData} from '../../api'
import './Chart.css'
import {Line,Bar} from 'react-chartjs-2'

const Chart = () => {
    const [dailyData,setDailyData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
           setDailyData(await fetchDailyData());
        }
        fetchApi()
    },[])

    const lineChart = (
        dailyData.length ? (<Line data={{
            labels:dailyData.map(({date}) => date),
            datasets:[{
                data: dailyData.map(({confirmed}) => confirmed),
                label:'Infected',
                borderColor:'#3333ff',
                fill:true
            },{
                data: dailyData.map(({deaths}) => deaths),
                label:'Dead',
                borderColor:'red',
                backgroundColor:'rgba(255,0,0,0.5)',
                fill:true
            }]
        }} />) : null
    )
    return (
        <div className="chart-container">
            {lineChart}
        </div>
    )
}

export default Chart
