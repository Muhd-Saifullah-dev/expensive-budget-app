export const formatCurrency=(amount)=>{
    return new Intl.NumberFormat("en-PK",{
        style:"currency",
        currency:"PKR",
        maximumFractionDigits:2
    }).format(amount)
}


export const formatedDate=(dateString)=>{
    const date=new Date(dateString)
    return date.toLocaleString("en-us",{
        year:"numeric",
        month:"short",
        day:"numeric"
    })
}

export const getExpensesByCategory=(expenses)=>{
    const categories={
        food:0,
        transport:0,
        entertainment:0,
        shopping:0,
        health:0,
        utilites:0,
        others:0
    }

    expenses.forEach(expense => {
        categories[expense.category] += expense.amount
    });
    return categories
}

export const getTotalExpenses=(expenses)=>{
    return expenses.reduce((total,expense)=> total + expense.amount,0)
}



export const getChartData=(expenses)=>{
    const expensesByCategory=getExpensesByCategory(expenses)
    console.log("expense in function chartDatat :: ",expensesByCategory)
   return Object.entries(expensesByCategory).filter(([_,value])=>value > 0).map(([name,value])=>{console.log("name in map ::",name)
    return    {
            name:name.charAt(0).toUpperCase()+ name.slice(1),
            value,
        }
})
}


export const getCategoryTextColor=(category)=>{
    const colors={
        food:"text-indigo-500",
        transport:"text-cyan-500",
        entertainment:"text-purple-500",
        utilites:"text-teal-500",
        health:"text-green-500",
        shopping:"text-orange-500",
        other:"text-slate-500"
    }
    return colors[category] || "text-gray-600"
}


export const getMOnthName=(date)=>{
    return date.toLocaleString("default",{month:"long"})
}


export const getExpensesByMonth=(expenses,numMonth=6)=>{
    const now=new Date()
    const result={}
    for(let i=0;i<numMonth;i++){
        const d=new Date(now.getFullYear(),now.getMonth()-i,1)
        const monthYear=`${getMOnthName(d)} ${d.getFullYear()}`
        result[monthYear]=0
    }

    expenses.forEach((expense)=>{
        const expenseDate=new Date(expense.date)
        const monthYear=`${getMOnthName(expenseDate)} ${expenseDate.getFullYear()}`
        if(result[monthYear]!==undefined){
            result[monthYear] +=expense.amount
        }
    })
    return result
}