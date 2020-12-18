const first = document.querySelector(".left");
const iframe = document.querySelector("iframe");
const btn = document.querySelector("button");

iframe.innerHTML = `<!DOCTYPE html>
<html>
<body>

<p>Write your code within the script  tag and place your result in place-holder tag :</p>

<p id="demo"></p>

<script>
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
</script>

</body>
</html>`

btn.addEventListener("click", () => {
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});


first.addEventListener('keyup',()=>{
  var html = first.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

first.addEventListener("paste", function(e) {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});

// var numbers = [175, 50, 25];

// document.getElementById("place-holder").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }