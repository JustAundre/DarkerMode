let packDetails = document.getElementById("packDetailsId");
let permissions = document.getElementById("termsOfUseId");
let changelog = document.getElementById("changelogId");
function detailsClick() {
  if (packDetails.hasAttribute("active")) {
    // Sets the button to inactive if it was already active and was clicked.
    packDetails.removeAttribute("active")
  }
  else {
  // Changes the default button CSS to indicate it is selected only if it isn't already selected.
  packDetails.setAttribute("active", "")
  permissions.removeAttribute("active")
  changelog.removeAttribute("active")
  }
}
function permissionsClick() {
  if (permissions.hasAttribute("active")) {
    // Sets the button to inactive if it was already active and was clicked.
    permissions.removeAttribute("active")
  }
  else {
  // Changes the default button CSS to indicate it is selected only if it isn't already selected.
  packDetails.removeAttribute("active")
  permissions.setAttribute("active", "")
  changelog.removeAttribute("active")
  }
}
function changelogClick() {
  if (changelog.hasAttribute("active")) {
    // Sets the button to inactive if it was already active and was clicked.
    changelog.removeAttribute("active")
  }
  else {
  // Changes the default button CSS to indicate it is selected only if it isn't already selected.
  packDetails.removeAttribute("active")
  permissions.removeAttribute("active")
  changelog.setAttribute("active", "")
  }
}