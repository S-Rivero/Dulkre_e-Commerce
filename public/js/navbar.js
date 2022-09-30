/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showFunction(id) {
    document.getElementById(id).classList.toggle("show");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#catalogoUl')) {
        document.getElementById('catalogoUl').classList.remove("show");
    }
}
document.getElementById('dropdownCatalogo').addEventListener('click', e => {
    document.getElementById('dropdownCatalogo').ariaExpanded.toggle();
    document.getElementById('dropdownCatalogoMenu').classList.toggle('show')
});