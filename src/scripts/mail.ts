const obfuscatedMail = "xzctek.dpaapwe@rxltw.nzx";

function rotateLetter(character: string, shift: number): string {
  const code = character.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    const base = 65;
    return String.fromCharCode(((code - base + shift + 26) % 26) + base);
  }

  if (code >= 97 && code <= 122) {
    const base = 97;
    return String.fromCharCode(((code - base + shift + 26) % 26) + base);
  }

  return character;
}

function decodeRot11(value: string): string {
  return value
    .split("")
    .map((character) => rotateLetter(character, -11))
    .join("");
}

export function getMail(): string {
  return decodeRot11(obfuscatedMail);
}
