let search = document.getElementById("search");
let xxlMenu = document.getElementById("xxlSizeMenu");
let inputWide = document.getElementById("inputWide");
let headerPart = document.getElementById("headerPart");
let cancel = document.getElementById("cancel");
const xlSize = 1028;


search.addEventListener("click", () => {
  xxlMenu.style.display = "none";
  inputWide.style.display = "flex";
  headerPart.appendChild("inputWidth");
});

const onResizeEvent = () => {
  if (window.innerWidth < xlSize) {
    inputWide.style.display = "none";
    xxlMenu.style.display = "flex";
  }
};

window.addEventListener("resize", onResizeEvent, true);

cancel.addEventListener("click", () => {
  xxlMenu.style.display = "flex";
  inputWide.style.display = "none";
});
