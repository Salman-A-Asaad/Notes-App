let container = document.getElementsByClassName("container")[0];

function show() {
  if(localStorage.note!=null) container.innerHTML = localStorage.note;
}
show();
let button = document.getElementById("button");
button.addEventListener("click", () => {
  let note = document.createElement("div");
  let textArea = document.createElement("textarea");
  let img = document.createElement("img");
  note.classList.add("note");
  textArea.setAttribute("placeholder", "Write");
  img.src = "img/delete.png";
  note.appendChild(textArea);
  note.appendChild(img);
  container.appendChild(note);
});
container.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    localStorage.note = container.innerHTML;
  } else if (e.target.tagName == "TEXTAREA") {
    let note = Array.from(document.querySelectorAll(".note textarea"));
    note.forEach((e) => {
      e.onkeyup = function () {
        e.textContent = e.value;
        localStorage.note = container.innerHTML;
      };
    });
  }
});
