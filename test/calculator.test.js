const calculator = require('../src/calculator');

describe('Calculator Tests', () => {
    // Tests for add function
    test('add: should return 5 for add(2, 3)', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('add: should return -1 for add(-2, 1)', () => {
        expect(calculator.add(-2, 1)).toBe(-1);
    });

    test('add: should return 0 for add(0, 0)', () => {
        expect(calculator.add(0, 0)).toBe(0);
    });

    // Tests for diff function
    test('diff: should return 1 for diff(3, 2)', () => {
        expect(calculator.diff(3, 2)).toBe(1);
    });

    test('diff: should return -3 for diff(-1, 2)', () => {
        expect(calculator.diff(-1, 2)).toBe(-3);
    });

    test('diff: should return 0 for diff(0, 0)', () => {
        expect(calculator.diff(0, 0)).toBe(0);
    });

    // Tests for multiply function
    test('multiply: should return 6 for multiply(2, 3)', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiply: should return -6 for multiply(-2, 3)', () => {
        expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('multiply: should return 0 for multiply(0, 5)', () => {
        expect(calculator.multiply(0, 5)).toBe(0);
    });

    // Tests for divide function
    test('divide: should return 2 for divide(6, 3)', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divide: should throw error for divide(6, 0)', () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
    });

    test('divide: should return -2 for divide(-6, 3)', () => {
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    // Tests for pow function
    test('pow: should return 8 for pow(2, 3)', () => {
        expect(calculator.pow(2, 3)).toBe(8);
    });

    test('pow: should return 1 for pow(5, 0)', () => {
        expect(calculator.pow(5, 0)).toBe(1);
    });

    test('pow: should return 0.25 for pow(2, -2)', () => {
        expect(calculator.pow(2, -2)).toBe(0.25);
    });

    // Additional edge cases
    test('add: should handle large numbers', () => {
        expect(calculator.add(1e10, 1e10)).toBe(2e10);
    });

    test('diff: should handle large numbers', () => {
        expect(calculator.diff(1e10, 1e9)).toBe(9e9);
    });

    test('multiply: should handle large numbers', () => {
        expect(calculator.multiply(1e5, 1e5)).toBe(1e10);
    });

    test('divide: should handle decimals', () => {
        expect(calculator.divide(1, 3)).toBeCloseTo(0.333, 3);
    });

    test('pow: should handle fractional exponents', () => {
        expect(calculator.pow(9, 0.5)).toBe(3);
    });
});