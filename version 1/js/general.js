function changeBackgroundColor() {
    let button = document.getElementById("theme-button");
    let currentColor = document.body.style.backgroundColor;

    if (currentColor === 'rgb(0, 0, 0)' || currentColor === '#000') {
        // If current color is dark, switch to light theme
        document.body.style.backgroundColor = '#0094EB';
        button.innerText = "Dark Theme";
    } else {
        // If current color is light, switch to dark theme
        document.body.style.backgroundColor = '#000';
        button.innerText = "Light Theme";
    }
}
