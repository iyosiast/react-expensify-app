import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';
import { exportAllDeclaration } from '@babel/types';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correcltly add up as single expenses', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correcltly add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});