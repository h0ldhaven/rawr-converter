import dinoAlphabetJson from '../data/dinoAlphabet.json';
import dictionaryJson from '../data/dictionary.json';

type DinoAlphabet = Record<string, string>;
type Dictionary = Record<string, string>;

const dinoAlphabet: DinoAlphabet = dinoAlphabetJson as DinoAlphabet;
const dictionary: Dictionary = dictionaryJson as Dictionary;

/**
 * Fonction pour traduire un texte humain vers le langage dino.
 */
export function humanToDino(text: string): string {
    const translated = text.split(/(\s+|\P{L}+)/gu).map((token) => {
        if (isWhitespaceOrSymbol(token)) {
            return token;  // Garde les espaces et symboles tels quels
        }

        const lowerToken = token.toLowerCase();

        // Vérifie si le mot entier existe dans le dictionnaire
        if (dictionary[lowerToken]) {
            return dictionary[lowerToken];
        }

        // Sinon, traduit lettre par lettre (y compris accents !)
        return Array.from(lowerToken).map((char) => dinoAlphabet[char] ?? char).join('');
    }).join('');

    return translated;
}

/**
 * Fonction pour traduire un texte dino vers le langage humain.
 */
export function dinoToHuman(text: string): string {
    const invertedAlphabet: DinoAlphabet = invertAlphabet(dinoAlphabet);
    const invertedDictionary: Dictionary = invertAlphabet(dictionary);

    const translated = text.split(/(\s+|\P{L}+)/gu).map((token) => {
        if (isWhitespaceOrSymbol(token)) {
            return token;
        }

        // Vérifie si le mot entier existe dans le dictionnaire inversé
        if (invertedDictionary[token]) {
            return invertedDictionary[token];
        }

        // Sinon, traduit par motifs (gros parsing)
        let result = '';
        let remaining = token;

        // Trie les motifs par taille décroissante pour matcher les plus grands d'abord
        const sortedAlphabetKeys = Object.keys(invertedAlphabet).sort((a, b) => b.length - a.length);

        while (remaining.length > 0) {
            let matched = false;
            for (const dinoChar of sortedAlphabetKeys) {
                if (remaining.startsWith(dinoChar)) {
                    result += invertedAlphabet[dinoChar];
                    remaining = remaining.slice(dinoChar.length);
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                // Si aucun motif ne matche, on garde la première lettre brute
                result += remaining[0];
                remaining = remaining.slice(1);
            }
        }

        return result;
    }).join('');

    return translated;
}

/**
 * Utilitaire : Inverse une map clé-valeur.
 */
function invertAlphabet(obj: Record<string, string>): Record<string, string> {
    const inverted: Record<string, string> = {};
    for (const [key, value] of Object.entries(obj)) {
        inverted[value] = key;
    }
    return inverted;
}

/**
 * Vérifie si un token est un espace ou un symbole (non lettre).
 */
function isWhitespaceOrSymbol(token: string): boolean {
    return /^\s*$/.test(token) || /^\P{L}+$/u.test(token);
}