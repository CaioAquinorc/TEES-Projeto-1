export function classifyTriangle(a, b, c) {
    // Distância entre dois pontos
    const distance = (p1, p2) =>
        Math.hypot(p2.x - p1.x, p2.y - p1.y);

    const ab = distance(a, b);
    const bc = distance(b, c);
    const ca = distance(c, a);

    // Verifica se forma um triângulo válido
    if (
        ab + bc <= ca ||
        ab + ca <= bc ||
        bc + ca <= ab
    ) {
        return 'invalid';
    }

    // Classificação
    if (ab === bc && bc === ca) {
        return 'equilateral';
    }

    if (ab === bc || bc === ca || ab === ca) {
        return 'isosceles';
    }

    return 'scalene';
}