// 1.
for (let i = 0; i <= 25; i++) {
  //   console.log(i);
}

// 2.
let i = 0;
while (i <= 10) {
  // console.log(i);
  i++;
}

// 3.
let j = 0;
do {
  // console.log(j);
  j++;
} while (j <= 15);

// 4.
const numbers = [23, 44, 123, 234, 765, 1023, 2368];
for (let k = 0; k < numbers.length; k++) {
  if (numbers[k] % 2 !== 0) {
    // console.log(numbers[k]);
  }
}

// 5.
const currentDay = new Date().getDay();
switch (currentDay) {
  case 0:
    console.log("კვირა");
    break;
  case 1:
    console.log("ორშაბათი");
    break;
  case 2:
    console.log("სამშაბათი");
    break;
  case 3:
    console.log("ოთხშაბათი");
    break;
  case 4:
    console.log("ხუთშაბათი");
    break;
  case 5:
    console.log("პარასკევი");
    break;
  case 6:
    console.log("შაბათი");
    break;
}
