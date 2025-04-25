import React, { useState } from 'react'
import { useExpenses } from '../context/ExpensiveContext'
import { getChartData, getExpensesByMonth } from '../utils/expense'
import { BarChart, PieChart } from 'lucide-react'
import ExpensePieChart from './ExpensePieChart'
import ExpenseBarChart from './ExpenseBarChart'


function ExpenseChart() {
    const {expenses}=useExpenses()
    
    const [chartType,setChartType]=useState("pie")
    const chartData=getChartData(expenses)

    const monthlyData=getExpensesByMonth(expenses)
    
    if(!expenses || expenses.length===0){
        return  <div className='bg-white rounded-lg shadow-md text-center  p-6'>

        <h2 className='text-2xl font-semibold text-expenseDark mb-4'>
            Expense Analytics
        </h2>
        <div className='flex justify-center mb-6 space-x-4'>
    <button className={`flex justify-center px-4 py-2 cursor-pointer rounded-md transition-all ${chartType==="pie" ?"bg-expenses text-white" :"bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
    onClick={()=>setChartType("pie")}
    >
        <PieChart size={18} className='mr-2'/>
        <span>Pie Chart</span>
    </button> 
    <button className={`flex justify-center px-4 py-2 cursor-pointer rounded-md transition-all ${chartType==="bar" ?"bg-expenses text-white" :"bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
    onClick={()=>setChartType("bar")}
    >
        <BarChart size={18} className='mr-2'/>
        <span>Bar Chart</span>
    </button>
        </div>
        <p className='text-gray-500'>Add some expenses to see your spending analytics</p>
        </div>
    }


  return (
    <div className='bg-white rounded-lg shadow-md  p-6'>

        <h2 className='text-2xl font-semibold text-expenseDark mb-4'>
            Expense Analytics
        </h2>
        <div className='flex justify-center mb-6 space-x-4'>
    <button className={`flex justify-center px-4 py-2 cursor-pointer rounded-md transition-all ${chartType==="pie" ?"bg-expenses text-white" :"bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
    onClick={()=>setChartType("pie")}
    >
        <PieChart size={18} className='mr-2'/>
        <span>Pie Chart</span>
    </button> 
    <button className={`flex justify-center px-4 py-2 cursor-pointer rounded-md transition-all ${chartType==="bar" ?"bg-expenses text-white" :"bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
    onClick={()=>setChartType("bar")}
    >
        <BarChart size={18} className='mr-2'/>
        <span>Bar Chart</span>
    </button>
        </div>

        <div>{chartType==="pie"? <ExpensePieChart data={chartData}/> :<ExpenseBarChart data={monthlyData}/>}</div>
    </div>
  )
}

export default ExpenseChart