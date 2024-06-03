document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const dropdown = document.getElementById("dropdown");

    if (dropdown.style.display === "none" || dropdown.style.display === "") {
      dropdown.style.display = "block";
      burgerMenu.style.zIndex = "99999999";
    } else {
      dropdown.style.display = "none";
      burgerMenu.style.zIndex = "";
    }
  }

  document.getElementById("burger-menu").addEventListener("click", toggleMenu);
});

const draggable = document.getElementById("container1");

let isDragging = false;
let offsetX, offsetY;

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
  draggable.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  draggable.style.cursor = "grab";
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  if (name && email && message) {
      alert(`Tak, ${name}! Din besked er blevet sendt`);
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill in all fields.');
  }
});

function goToGoogle() {
  var url = "https://www.google.dk/";
  window.location.href = url;
}