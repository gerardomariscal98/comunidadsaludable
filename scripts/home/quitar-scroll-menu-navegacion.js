var body = document.getElementById("body-principal");

function quitarScrollBody() {
  if (body.style.overflow != "hidden") {
    body.style.overflow = "hidden";
  }

  else {
    body.style.overflow = "scroll";
  }
}