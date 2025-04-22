import React from 'react'
import {useExpenses } from "../context/ExpensiveContext"
import {getTotalExpenses,getExpensesByCategory, formatCurrency } from "../utils/expense"
import { Wallet } from 'lucide-react'
function ExpenseSummary() {
    const {expenses}=useExpenses()
    const totalExpenses=getTotalExpenses(expenses || [])
    const CategoriesData=getExpensesByCategory(expenses || [])
    
    let highestCategory={
        name:"none",
        amount:0
    }
   Object.entries(CategoriesData).forEach(([category,amount])=>{
    if(amount > highestCategory.amount){
        highestCategory={
            name:category,
            amount
        }
    }
   })

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg'>
            <div className='flex justify-center space-x-4'>
                <div className='bg-expenseLight p-3 rounded-full '>
                    <Wallet size={24} className='text-expenses' />
                </div>
                
                
                <div>
                    <h3 className='text-sm font-medium text-gray-500'>
                        Total Expenses
                    </h3>
                    <p className='text-2xl font-bold  text-expenseDark'>{formatCurrency(totalExpenses)}</p>
                </div>
            
            
            </div>
        </div> 
         <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg'>
            <div className='flex justify-center space-x-4'>
                <div className='bg-red-100 p-3 rounded-full '>
                    <Wallet size={24} className='text-red-500' />
                </div>
                
                
                <div>
                    <h3 className='text-sm font-medium text-gray-500'>
                        Highest Category 
                    </h3>
                    <p className='text-2xl font-bold  text-expenseDark'>{formatCurrency(totalExpenses)}</p>
                </div>
            
            
            </div>
        </div>


      
    </div>
  )
}

export default ExpenseSummary