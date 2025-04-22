import React, { useState } from 'react'
import { useExpenses } from '../context/ExpensiveContext'
import toast from 'react-hot-toast';

function ExpenseForm() {
    const {addExpense }=useExpenses();
    const [description,setDescription]=useState("")
    const [amount,setAmount]=useState("")
    const [category,setCategory]=useState("food")
    const [date,setDate]=useState(new Date().toISOString().split("T")[0])
    const [isSubmitting,setIsSubmitting]=useState(false)

    const categoryOption=[
        { value: "food", label: "Food & Dining" },
        { value: "transport", label: "Transportation" },
        { value: "entertainment", label: "Entertainment" },
        { value: "shopping", label: "Shopping" },
        { value: "utilities", label: "Utilities" },
        { value: "health", label: "Health & Medical" },
        { value: "other", label: "Other" },
    ]

    const handleSubmit=(e)=>{ 
        e.preventDefault()
        try {
            isSubmitting(true)
            if(!description.trim()){
                throw new Error("Please enter a description")
            }
            if(!amount || isNaN(Number(amount)) || Number(amount) <=0 ){
                throw new Error("Please enter a valid amount")
            }
            addExpense({
                description:description.trim(),
                amount:Number(amount),
                category,
                date
            })
            toast.success("expense added successfully")
            setAmount("")
            setDescription("")
            setCategory("food")
            setDate(new Date().toISOString().split("T")[0])
        } catch (error) {
            toast.error("failed to add expense")
        }
        finally{
            setIsSubmitting(false)
        }
    }
  return (
    <div className='w-full bg-white rounded-lg p-6 shadow-md  max-w-md mx-auto'>
        <h2 className='text-2xl font-semibold text-expenseDark mb-6 text-center'>Add New Expense</h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
           
           <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700 mb-1'>
                    Description
                </label>
                <input type="text" id='description'  placeholder='what did you spend on?'
                value={description}
                onChange={(e)=>setDescription(e.target.value)}

                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expenseLight focus:border-transparent transition-all'
                disabled={isSubmitting}
                />
            </div> 
          
            <div>
                <label htmlFor="amount" className='block text-sm font-medium text-gray-700 mb-1'>
                 Amount
                </label>
                <input type="number" id='amount'  placeholder='0.00'
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}

                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expenseLight focus:border-transparent transition-all'
                disabled={isSubmitting}
                step="any"
                inputMode="numeric"
                />
            </div>
            
              <div>
                <label htmlFor="category" className='block text-sm font-medium text-gray-700 mb-1'>
               Category
                </label>
                <select  id='category'  placeholder='0.00'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}

                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expenseLight focus:border-transparent transition-all'
                disabled={isSubmitting}
               
                >
                    {categoryOption.map((option,index)=>(
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}

                </select>
            </div>

            <div>
                <label htmlFor="date" className='block text-sm font-medium text-gray-700 mb-1'>
                   Date
                </label>
                <input type="date" id='description'  placeholder='what did you spend on?'
                value={date}
                onChange={(e)=>setDate(e.target.value)}

                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-expenseLight focus:border-transparent transition-all'
                disabled={isSubmitting}
                />
            </div> 
            <button type='submit' 
                className='w-full bg-expenses text-white py-2 font-medium focus:outline-none focus:ring-2 focus:ring-expenseLight rounded-md hover:bg-expenseDark transition-all'
                disabled={isSubmitting}
            >
                {isSubmitting ? "Adding...":"Add Expense"}
            </button>
        </form>
    </div>
  )
}

export default ExpenseForm