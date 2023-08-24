import React, { useState } from 'react';

import { Chart } from 'primereact';

 

const Progress5 = () => {

    const [chartData] = useState({

        labels: ['Sci-fi', 'Novels', 'Technical', 'History', 'General', 'Others'],

        datasets: [

            {

                data: [30, 30, 10, 20, 5, 5],

                backgroundColor: [

                    "#2E86C1  ",

                    "#D35400 ",

                    "#ABB2B9 ",

                    "#F4D03F ",

                    "#1B4F72",

                    "#28B463"

                ],

                hoverBackgroundColor: [

                    "#64B5F6",

                    "#81C784",

                    "#FFB74D"

                ]

            }

        ]

    });

 

    const [lightOptions] = useState({

        plugins: {

            legend: {

                labels: {

                    color: '#495057'

                }

            }

        }

    });

 

    return (

        <div className="card flex justify-content-center">
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trend Chart</strong>
            <Chart type="pie" data={chartData} options={lightOptions} style={{ position: 'relative', width: '100%' }} />

        </div>

    )

}
export default Progress5;   