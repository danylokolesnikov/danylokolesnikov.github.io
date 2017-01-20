document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector('.hamburger--collapse');
  var menuItems = document.querySelectorAll('.nav_item');
  var links = document.querySelectorAll('.nav_item a');
  links = Array.prototype.slice.apply(links);
  menuItems = Array.prototype.slice.apply(menuItems);

  button.addEventListener('click', function() {
    if (button.className === "hamburger hamburger--collapse") {
      showMenu();
    }
    else {
      hideMenu();
    };
  })

  links.forEach(function (el){
    el.addEventListener('click', function() {
      hideMenu();
    })

  })
function showMenu() {
  button.classList.add('is-active');
  menuItems.map(function (el){
    el.style.display = 'list-item';
  })
};
function hideMenu() {
  button.className = 'hamburger hamburger--collapse';
  menuItems.map(function (el){
    el.style.display = 'none';
  });
}
});
