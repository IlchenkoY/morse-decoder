const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const arr = expr.split("");
  const tenLenghtStrings = [];
  let decodeString = "";

  while (arr.length > 0) {
    tenLenghtStrings.push([...arr.splice(0, 10)]);
  }

  tenLenghtStrings.forEach((innerArr, i) => {
    if (innerArr.join("") === "**********") {
      tenLenghtStrings[i] = [" "];
      return;
    }
    for (let i = 0; i < innerArr.length; i += 1) {
      if (innerArr[i] === "1") {
        if (innerArr[i + 1] === "1") {
          innerArr[i] = "-";
          innerArr.splice(i + 1, 1);
          continue;
        }
        innerArr[i] = ".";
      }
    }
  });

  const morseArr = tenLenghtStrings.map((innerArr) =>
    innerArr.filter((el) => el !== "0")
  );

  morseArr.forEach((el) => {
    decodeString += MORSE_TABLE[el.join("")] ? MORSE_TABLE[el.join("")] : " ";
  });

  return decodeString;
}

module.exports = {
  decode,
};
