import React from 'react'
import {ExpenseProvider} from "../context/ExpensiveContext"
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../components/Dashboard'
const Index = () => {
  return (
    <ExpenseProvider>
        <DashboardLayout>
            <Dashboard/>
        </DashboardLayout>
    </ExpenseProvider>
  )
}

export default Index