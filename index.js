var numbers = [175, 50, 25];

document.getElementById("place-holder").innerHTML = numbers.reduce(myFunc).toString();

function myFunc(total, num) {
  return total - num;
}