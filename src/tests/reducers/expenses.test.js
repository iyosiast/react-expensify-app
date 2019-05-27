import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test ('should setup default state', () => {
    const state = expenseReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
});

test ('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test ('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test ('should add an expense', () => {
    const newExpense = {
        id: '4',
        description: 'Grocery',
        note: '',
        amount: 50000,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense:  newExpense
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test ('should edit  an expense by id', () => {
    const amount  = 9000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id, 
        updates: {
            amount
        }
    };
    const state = expenseReducers(expenses, action);
    expect(state[1].amount).toBe(amount);
}); 

test ('should not edit  an expense if ID not found', () => {
    const amount  = 10000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1', 
        updates: {
            amount
        }
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual(expenses);
}); 