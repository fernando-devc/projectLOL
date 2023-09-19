function OpenDrawer() {
  const element = document.getElementById("backdrop-menu-site-1");
  const elementD = document.getElementById("drawer-menu-site-1");
  elementD.style.left = 0;
  element.style.display = "flex";
}

function CloseDrawer() {
  const element = document.getElementById("backdrop-menu-site-1");
  const elementD = document.getElementById("drawer-menu-site-1");
  element.style.display = "none";
  elementD.style.left = "-200%";
}

function DraweAction(e) {
  e.preventDefault();
  e.stopPropagation();
}
