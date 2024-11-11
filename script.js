function dollarToRuble(dollar) {
  return 75 * dollar;
}

let dollar = prompt("Enter the amount of dollar: ");
let ruble = prompt("Enter the amount of ruble: ");

console.log(
  `${dollar} Dollar + ${ruble} Ruble = ${
    dollarToRuble(dollar) + Number(ruble)
  } Ruble`
);

function tens(num) {
  switch (num) {
    case 0:
      return "";
    case 1:
      return "on ";
    case 2:
      return "iyirmi ";
    case 3:
      return "otuz ";
    case 4:
      return "qırx ";
    case 5:
      return "əlli ";
    case 6:
      return "altmış ";
    case 7:
      return "yetmiş ";
    case 8:
      return "səksən ";
    case 9:
      return "doxsan ";

    default:
      return -1;
  }
}
function ones(num) {
  switch (num) {
    case 0:
      return "";
    case 1:
      return "bir";
    case 2:
      return "iki";
    case 3:
      return "üç";
    case 4:
      return "dört";
    case 5:
      return "beş";
    case 6:
      return "altı";
    case 7:
      return "yeddi";
    case 8:
      return "səkkiz";
    case 9:
      return "doqquz";

    default:
      return -1;
  }
}

let number = Number(prompt("Enter a number between 1 and 99:"));

function numberToString(num) {
  let ten = (num - (num % 10)) / 10;
  let one = num % 10;

  let a = tens(ten);
  let b = ones(one);

  if (a == -1 && b == -1) {
    return "Invalid Number!";
  }

  return tens(ten) + ones(one);
}

if (number >= 1 && number <= 99) {
  console.log(numberToString(number));
} else {
  console.log("Invalid number!");
}
