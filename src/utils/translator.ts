import dinoAlphabet from '../data/dinoAlphabet.json';

export function humanToDino(text: string): string {
    return text
        .toLowerCase()
        .split('')
        .map((char) => (dinoAlphabet as Record<string, string>)[char] || char)
        .join(' ');
};

export function dinoToHuman(dinoText: string): string {
    const invertedAlphabet = Object.fromEntries(
        Object.entries(dinoAlphabet).map(([k, v]) => [v, k])
    );
      
    return dinoText
        .split(/\s+/)
        .map((word) => invertedAlphabet[word] || word)
        .join('');
};