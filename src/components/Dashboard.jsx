import React from 'react'
import ExpenseSummary from './ExpenseSummary'
import ExpenseChart from './ExpenseChart'
import ExpenseForm from './ExpenseForm'

function Dashboard() {
  return (
    <div className='space-y-8'>
        {/* expenses summary */}
        <ExpenseSummary/>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='lg:col-span-2'>{/* expense chart */} 
                <ExpenseChart/>
            </div>
            <div> 
              <ExpenseForm/>
              {/* expense form */}</div>
        </div>
    </div>
  )
}

export default Dashboard