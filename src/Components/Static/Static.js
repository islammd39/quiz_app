import React from 'react';
import { PieChart, Pie } from 'recharts';



const Static = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 8 },
        { name: 'A2', value: 9 },
        { name: 'B1', value: 8 },
        { name: 'B2', value: 11 }
      ];

    return (
        
        <div>
        <h1>this is static</h1>
        <PieChart width={400} height={400}>
        <Pie data={data01} dataKey="total" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
        <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
        </div>
    );
};

export default Static;