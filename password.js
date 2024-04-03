const password = process.argv.slice(2).toString();
const obfuscate = function(pass) {
  let obfuscatedPass = "";
  for (let i = 0; i < pass.length; i++) {
    if (pass[i] === "a") {
      obfuscatedPass += "4";
    } else if (pass[i] === "e") {
      obfuscatedPass += "3";
    } else if (pass[i] === "o") {
      obfuscatedPass += "0";
    } else if (pass[i] === "l") {
      obfuscatedPass += "1";
    } else {
      obfuscatedPass += pass[i];
    }
  }
  return obfuscatedPass;
};

console.log(obfuscate(password));
