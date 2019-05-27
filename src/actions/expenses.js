import uuid from 'uuid';

// Expense Reducer

// Reducers specify how the application's state changes in response to actions sent to the store. 
//Remember that actions only describe what happened, but don't describe how the 
//application's state changes.

// ADD_EXPENSE
export const addExpense = (
    { 
        description = '', 
        note = '', 
        amount= 0, 
        createdAt = 0 
    } = {}
    ) => ({
        type : 'ADD_EXPENSE',
        expense : {
            id: uuid(),
            description,
            note,
            createdAt,
            amount
        }
});

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
        type : 'REMOVE_EXPENSE',
        id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});