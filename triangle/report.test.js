import { describe, it, expect } from 'vitest';
import { formatReport } from './report.js';

describe('formatReport', () => {

    it('deve gerar relatório para triângulo equilátero', () => {
        const result = formatReport(
            { x: 0, y: 0 },
            { x: 2, y: 0 },
            { x: 1, y: Math.sqrt(3) }
        );

        expect(result).toBe(
            'equilateral'
        );
    });

    it('deve gerar relatório para triângulo isósceles', () => {
        const result = formatReport(
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 2, y: 3 }
        );

        expect(result).toBe(
            'isosceles'
        );
    });

    it('deve gerar relatório para triângulo escaleno', () => {
        const result = formatReport(
            { x: 0, y: 0 },
            { x: 4, y: 0 },
            { x: 1, y: 3 }
        );

        expect(result).toBe(
            'scalene'
        );
    });

    it('deve gerar relatório para triângulo inválido', () => {
        const result = formatReport(
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 2 }
        );

        expect(result).toBe(
            'invalid'
        );
    });

});