function turnIntoTitle(word: string): string {
    const firstLetter = word.charAt(0);
    const rest = word.slice(1);
    return `${firstLetter.toUpperCase()}${rest}`;
}

export { turnIntoTitle };
