import { createContext, useContext, useEffect, useReducer } from "react";

const ExpenseContext = createContext();

const initialState = {
  expenses:JSON.parse(localStorage.getItem("expenses")) || [],
  laoding: false,
  error: null,
};

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSES":
      return { ...state, expenses: [...state.expenses, action.payload] };

    case "DELETE_EXPENSES":
      return {
        ...state,
        expenses: state.expenses.filter((expense) => action.payload.id !== expense.id),
      };

    case "UPDATE_EXPENSES":
      return {
        ...state,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };

    case "SET_EXPENSES":
      return { ...state, expenses: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
    const [state,dispatch ]=useReducer(expenseReducer,initialState);

    //save expenses to local storage whenever they changed
    useEffect(()=>{
       try {
        
        // expenses tho array jabhi stringify kiya hai 
         localStorage.setItem("expenses",JSON.stringify(state.expenses))
       } catch (error) {
        console.log(`failed to save the expenses to local storage : ${error}`)
        dispatch({type:"SET_ERROR",payload:error})
       }
    },[state.expenses])


    const value={
        ...state,
        addExpense:(expense)=>{
            const newExpense={
                ...expense,
                id:crypto.randomUUID()
            }
            dispatch({type:"ADD_EXPENSES",payload:newExpense})
        },
        deleteExpense:(id)=>{
            dispatch({type:"DELETE_EXPENSES",payload:{id}})
        },
        // hum id b le skty the 
        updateExpense:(expense)=>{
            dispatch({type:"UPDATE_EXPENSES",payload:id})
        },
        setExpense:(expense)=>{
            dispatch({type:"SET_EXPENSES",payload:expense})
        }
    }
  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
};

export const useExpenses=()=>{
  const context=useContext(ExpenseContext)
 
  if(context === undefined){
    throw new Error("useExpenses must be used within an ExpenseProvider")
  }
 
  return context
}