import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

// ✅ register all required parts once
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title)

interface GraphProps{
    themeColor: string,
}
function Graph({themeColor }:GraphProps) {

    const themeColorOpacity = `${themeColor}80`
    
  return (
    
    <>
        <Radar
        data={{
          labels: ['Intelligence','Humor',  'Honesty', 'Empathy', 'Maturity', 'Wealth'],
          datasets: [
            {
              label: 'User Stats',
              data: [8,7,5,5,7,8],
              backgroundColor: themeColorOpacity, // your theme color with transparency
              borderColor: themeColor,
              borderWidth: 2,
              pointBackgroundColor: '#d088e6'
            }
          ]
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' as const },
            
          },
          scales: {
            r: {
              angleLines: { color: '#ccc' },
              grid: { color: '#ddd' },
              suggestedMin: 0,
              suggestedMax: 10,
              pointLabels: { color: '#333', font: { size: 14 } }
            }
          }
        }}
      />
    </>
    

  )
}

export default Graph