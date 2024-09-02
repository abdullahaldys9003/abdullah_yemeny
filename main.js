let open = document.getElementById("open");
let myNav = document.getElementById("myNav");

function addEventTranslateX(button, element) {
  button.addEventListener("click", () => {
    openNav(element);
  });
}



function openNav(element) {
  element.style.transform = "translateX(0)";
}

function closeNav() {
  document.getElementById("myNav").style.transform = 'translateX(-100%)';

}

document.addEventListener('click', function(event) {
  if (event.target.id !== 'open' && event.target.id !== 'myNav') {
    closeNav();
  }
});

addEventTranslateX(open, myNav);


