import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import calculateTotal from '../selectors/expenses-total'


export const  ExpensesSummary = ({expenseCount, expenseTotal}) => {  
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
        const formattedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>View {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</h1>
        </div>

    ); 
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: calculateTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)