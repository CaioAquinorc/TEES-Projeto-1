import { describe, it, expect } from 'vitest';
import { classifyTriangle } from './triangle';

describe('classifyTriangle', () => {

    it('deve retornar "equilateral"', () => {
        const result = classifyTriangle(
            { x: 0, y: 0 },
            { x: 2, y: 0 },
            { x: 1, y: Math.sqrt(3) }
        );

        expect(result).toBe('equilateral');
    });

    it('deve retornar "isosceles"', () => {
        const result = classifyTriangle(
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 2, y: 3 }
        );

        expect(result).toBe('isosceles');
    });

    it('deve retornar "scalene"', () => {
        const result = classifyTriangle(
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 1, y: 3 }
        );

        expect(result).toBe('scalene');
    });

    it('deve retornar "invalid" para pontos colineares', () => {
        const result = classifyTriangle(
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 }
        );

        expect(result).toBe('invalid');
    });

});