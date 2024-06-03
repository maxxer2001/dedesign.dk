function toggleMenu() {
  var menu = document.querySelector(".mobile-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "flex";
    addCloseButton();
  } else {
    menu.style.display = "none";
    removeCloseButton();
  }
}

function addCloseButton() {
  var closeButton = document.createElement("span");
  closeButton.innerHTML = "&#10006;";
  closeButton.classList.add("close-menu");
  closeButton.addEventListener("click", function () {
    toggleMenu();
  });
  document.querySelector(".mobile-menu").appendChild(closeButton);
}

function removeCloseButton() {
  var closeButton = document.querySelector(".close-menu");
  if (closeButton) {
    closeButton.remove();
  }
}

window.addEventListener("resize", resizePlaneVector);

function resizePlaneVector() {
  var screenWidth = window.innerWidth;
  var planeVector = document.querySelector(".plane-vector");
  var maxScreenWidth = 800;
  var newWidth =
    screenWidth <= maxScreenWidth ? screenWidth * 0.4 : maxScreenWidth * 0.4;
  planeVector.style.width = newWidth + "px";
  var aspectRatio = planeVector.naturalHeight / planeVector.naturalWidth;
  planeVector.style.height = newWidth * aspectRatio + "px";
}

resizePlaneVector();
