function generatePassword(length, useLetters, useNumbers, useSymbols) {
  const allCharacters = [];

  if (useLetters) {
    allCharacters.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (useNumbers) {
    allCharacters.push("0123456789");
  }
  if (useSymbols) {
    allCharacters.push("^!$%&|[](){}:;.,*+-#@<>~");
  }

  const characters = allCharacters.join("");
  let newPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }

  return newPassword;
}

// Exportar la función para su uso en otros archivos
export { generatePassword };