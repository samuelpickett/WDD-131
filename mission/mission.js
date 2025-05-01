const themeSelector = document.querySelector('select');
console.log(themeSelector.value);
function changeTheme(){
    if (themeSelector.value === "dark"){
        document.body.classList.add("dark");
        const byui = document.getElementById("byui_logo");
        byui.setAttribute("src", "images/byui-logo_white.png");
    }
    else{
        document.body.classList.remove("dark");
        const byui = document.getElementById("byui_logo");
        byui.setAttribute("src", "images/byui_logo.webp");
    }
}
themeSelector.addEventListener("change", changeTheme);