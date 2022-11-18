let input = document.querySelector("#search");
let list = document.querySelectorAll(".list");
let listArr = Array.from(list);

input.addEventListener("keyup", myFn);

function myFn() {
  listArr.map((item) => {
    let match = item.innerHTML
      .toLocaleLowerCase()
      .includes(input.value.toLocaleLowerCase());
    if (match) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
