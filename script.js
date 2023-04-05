let h1 = document.createElement("h1");
h1.innerText = "CountDown";
h1.className = "text-center mt-4";
document.body.append(h1);

let count = 10;
let h2 = document.createElement("h2");
h2.className = "display-4 text-primary text-center mt-4 pt-4";
document.body.append(h2);

setInterval(countDown, 1000);

function countDown() {
  h2.innerHTML = count > 0 ? count-- : "Happy Independence Day";
}
