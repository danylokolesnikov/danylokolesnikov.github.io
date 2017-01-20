document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('.hamburger--collapse');
  var menuItems = document.querySelectorAll('.nav_item');
  menuItems = Array.prototype.slice.apply(menuItems);

  button.addEventListener('click', function() {
    console.log(menuItems)
    if (button.className === "hamburger hamburger--collapse") {
      button.classList.add('is-active');
      showMenu();
    }
    else {
      button.className = 'hamburger hamburger--collapse';
      hideMenu();
    };
  })
function showMenu() {
  menuItems.map(function (el){
    el.style.display = 'list-item';
  })
};
function hideMenu() {
  menuItems.map(function (el){
    el.style.display = 'none';
  });
}
});
