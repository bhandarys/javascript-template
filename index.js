const left = document.querySelector(".left");
const right = document.querySelector(".right");
const execute = document.querySelector(".exec");
const reset = document.querySelector(".reset");

const init = () => {
  left.innerHTML = `
  &lt;strong&gt;Write your script inside the script tag & add your result to place-holder:&lt;/strong&gt;
  
  &lt;p&gt;This is an example of removing the 3rd element from the array&lt;/p&gt;
  
  &lt;p&gt;So [1,2,3,4,5,6,7,8,9,10] becomes [1,2,4,5,7,8,10]&lt;/p&gt;
  
  &lt;p id="place-holder"&gt;Here&lt;/p&gt;
  
  &lt;script&gt;
  var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var k = 3;
  
  var new_nums = nums.filter((x, i) => ((i + 1) % k));
  document.getElementById("place-holder").innerHTML = new_nums;
  
  &lt;/script&gt;`;  
}

const exec = () => {
  var html = left.textContent;
  right.src = "data:text/html;charset=utf-8," + encodeURI(html);
}
execute.addEventListener("click", () => {
  exec();
});
reset.addEventListener("click", () => {
  const ret = confirm(`You'll loose all your work. Are you sure?`);
  if(ret) {
    init();
    right.src = "";
  }
});
init();
