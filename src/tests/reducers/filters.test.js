import moment from 'moment';
import filterReducers from '../../reducers/filters';

test ('should setup default filter values', () => {
    const state = filterReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test ('should set sort by to amount', () => {
    const state = filterReducers(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test ('should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate:undefined,
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};

    const state = filterReducers(currentState, action);
    expect(state.sortBy).toBe('date');
});

test ('should set text filter', () => {
    const text = 'This is my text filter';
    const action = {type: 'SET_TEXT_FILTER', text};

    const state = filterReducers(undefined, action);
    expect(state.text).toBe(text);
});

test ('should set startDate filter', () => {
    const startDate = moment();
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: undefined
    };
    const action = {type: 'SET_START_DATE', startDate};

    const state = filterReducers(currentState, action);
    expect(state.startDate).toEqual(startDate);
});

test ('should set endDate filter', () => {
    const endDate = moment();
    const action = {type: 'SET_END_DATE', endDate};
    const state = filterReducers(undefined, action);
    expect(state.endDate).toEqual(endDate);
});