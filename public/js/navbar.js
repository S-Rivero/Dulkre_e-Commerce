const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
        console.log(currentDropdown)
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown !== currentDropdown)
            dropdown.classList.remove("active");
    })
})

window.onload = e => { 
    document.getElementById('FirstSec').style.marginTop = `${document.getElementById('nav').offsetHeight}px`;
}
window.addEventListener('resize', e => {
    document.getElementById('FirstSec').style.marginTop = `${document.getElementById('nav').offsetHeight}px`;
});