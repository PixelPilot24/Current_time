let lightMode = false;

/**
 * This function changes the color mode, updates the icon and the color scheme
 * */
function changeColorMode() {
  const colorModeIcon = document.getElementById('color-mode-icon');
  const editIcon = document.getElementById('edit-icon');
  const root = document.documentElement;

  if (lightMode) {
    lightMode = false;
    colorModeIcon.src = "/img/dark_mode.png";
    editIcon.src = "/img/edit_icon_light_mode.png";
    root.style.setProperty("--bg-color", "#FAFFB8")
    root.style.setProperty("--bg-button-color", "#35B0AB")
    root.style.setProperty("--text-color", "#226B80")
  } else {
    lightMode = true;
    colorModeIcon.src = "/img/light_mode.png";
    editIcon.src = "/img/edit_icon_dark_mode.png";
    root.style.setProperty("--bg-color", "#0F0F0F")
    root.style.setProperty("--bg-button-color", "#005B41")
    root.style.setProperty("--text-color", "#008170")
  }
}

window.changeColorMode = changeColorMode;
