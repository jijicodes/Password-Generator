const range = (n) => [...new Array(n)].map((_, i) => i);

export const randomNum = (begin, end) =>
  Math.floor(Math.random() * (end - begin + 1) + begin);

export const lengthControl = (arr, length) => {
  let receive = "";
  for (let i = 0; i < length; i++) {
    receive += arr[randomNum(0, arr.length - 1)];
  }
  return receive;
};

export const generatePW = (passwordSetting) => {
  const upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "n",
    "z",
  ];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols = [
    "?",
    "<",
    ">",
    ",",
    ".",
    "_",
    "-",
    "+",
    "`",
    "~",
    "/",
    "|",
    "!",
    "@",
    "#",
    "=",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "{",
    "}",
    "[",
    ";",
    ":",
    "]",
  ];

  const initial = lower;
  if (passwordSetting.upper) initial.push(upper);
  if (passwordSetting.numbers) initial.push(numbers);
  if (passwordSetting.symbols) initial.push(symbols);

  return lengthControl(initial.flat(), passwordSetting.passwordLength);
};
