import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';




const CATEGORY_COLORS = {
    Food: "#6366F1", // Indigo-500 - Softer indigo
    Transport: "#06B6D4", // Cyan-500 - Fresh cyan
    Entertainment: "#A855F7", // Purple-500 - Vibrant purple
    Utilities: "#14B8A6", // Teal-500 - Refreshing teal
    Health: "#22C55E", // Green-500 - Natural green
    Shopping: "#F97316", // Orange-500 - Warm orange
    Other: "#64748B", // Slate-500 - Neutral slate
  };
function ExpensePieChart({data}) {
   if (!data || data.length === 0){
    return  <div className='text-center text-gray-500'>No data available to display</div>
    
   }

   const getColor=(name)=>{
    return CATEGORY_COLORS[name] || "#8E9196";
   }

   const CustomTooktip=({active,payload})=>{
    if(active && payload &&payload.length){
        const {name,value}=payload[0].payload
        const total=data.reduce((sum,item)=>sum+item.value,0)
        const percentage=((value/total)*100).toFixed(0)
        return <div className='bg-white p-4 rounded-md shadow-md border border-gray-100'>
            <p className='font-medium'>{name}</p>
            <p className='text-lg'>Rs {value.toFixed(2)}
        <span className='text-sm text-gray-500 ml-1'>({percentage}%)</span>


            </p>
           
        </div>
    }
    return null
   }
  return (
    <ResponsiveContainer width={"100%"} height={300}>
        <PieChart>
            <Pie
            data={data}
            cx={"50%"}
            cy={"50%"}
            labelLine={false}
            outerRadius={80}
            fill='#8884d8'
            dataKey={value}
            animationDuration={750}
            animationBegin={0}
            animationEasing='ease-out'
            >
               { 
               data.map((entry,index)=>(
                     <Cell key={`cell-${index}`} fill={getColor(entry.name)}/>
                ))
                
                }
                <Tooltip content={<CustomTooktip/>} />
                <Legend  layout="horizontal" verticalAlign="bottom" align="center" formatter={(value)=>{
                    <span className='text-sm  font-medium '>{value}</span>
                }} />
            </Pie>
        </PieChart>
    </ResponsiveContainer>
  )
}

export default ExpensePieChart