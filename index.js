// Defines elements
let packDetails = document.getElementById("packDetailsId");
let permissions = document.getElementById("termsOfUseId");
let changelog = document.getElementById("changelogId");
function detailsClick() {
  // Sets the button to inactive if it was already active and was clicked.
  if (packDetails.hasAttribute("active")) {
    packDetails.removeAttribute("active")
  }
  // Changes the default button CSS to indicate it is selected only if it isn't already selected.
  else {
  packDetails.setAttribute("active", "")
  permissions.removeAttribute("active")
  changelog.removeAttribute("active")
  }
}
function permissionsClick() {
  if (permissions.hasAttribute("active")) {
    permissions.removeAttribute("active")
  }
  else {
  packDetails.removeAttribute("active")
  permissions.setAttribute("active", "")
  changelog.removeAttribute("active")
  }
}
function changelogClick() {
  if (changelog.hasAttribute("active")) {
    changelog.removeAttribute("active")
  }
  else {
  packDetails.removeAttribute("active")
  permissions.removeAttribute("active")
  changelog.setAttribute("active", "")
  }
}