
  function addProduct() {

  const ul = document.querySelector("ul");
console.log(ul)

const li = document.createElement("li");
console.log(li)

const input = document.querySelector("input")
console.log(input)

const checkbox = document.createElement("input");
console.log(checkbox
)
checkbox.type = "checkbox"
const testo = document.createElement("span");
testo.textContent = input.value;
input.value = "";

li.appendChild(testo)
ul.appendChild(li);
li.appendChild(checkbox);
  }