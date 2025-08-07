import { describe, it, expect } from 'vitest';
import operationResult from '@/components/operations/operation';

describe('test to MainOperation', () => {
    it('Should be 8 if n = 1', () => {
        const mOp = operationResult(1);
        expect(mOp.result).toBe(8);
    });
    it('Should be 20 if n = 2', () => {
        const mOp = operationResult(2);
        expect(mOp.result).toBe(20);
    });
    it('Should be 33 if n = 3', () => {
        const mOp = operationResult(3);
        expect(mOp.result).toBe(33);
    });
    it('Should be 51 if n = 4', () => {
        const mOp = operationResult(4);
        expect(mOp.result).toBe(51);
    });
    it('Should be 67 if n = 5', () => {
        const mOp = operationResult(5);
        expect(mOp.result).toBe(67);
    });
    it('Should be 93 if n = 6', () => {
        const mOp = operationResult(6);
        expect(mOp.result).toBe(93);
    });
    it('Should be 116 if n = 7', () => {
        const mOp = operationResult(7);
        expect(mOp.result).toBe(116);
    });
    it('Should be 147 if n = 8', () => {
        const mOp = operationResult(8);
        expect(mOp.result).toBe(147);
    });
    it('Should be 172 if n = 9', () => {
        const mOp = operationResult(9);
        expect(mOp.result).toBe(172);
    });
    it('Should be 188 if n = 10', () => {
        const mOp = operationResult(10);
        expect(mOp.result).toBe(188);
    });
});