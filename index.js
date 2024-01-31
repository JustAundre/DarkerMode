let packDetails = document.getElementById("packDetailsId");
let permissions = document.getElementById("termsOfUseId");
let changelog = document.getElementById("changelogId");




function detailsClick() {
  // Changes the text to show an indicator of selection.
  packDetails.textContent = "-Details-";
  permissions.textContent = "Permissions";
  changelog.textContent = "Changelog";

  // Changes the default button CSS to indicate it is selected.
  packDetails.setAttribute("active", true)
  permissions.setAttribute("active", false)
  changelog.setAttribute("active", false)
}



function permissionsClick() {
    // Changes the text to show an indicator of selection.
  packDetails.textContent = "Details";
  permissions.textContent = "-Permissions-";
  changelog.textContent = "Changelog";

  // Changes the default button CSS to indicate it is selected.
  packDetails.setAttribute("active", false)
  permissions.setAttribute("active", true)
  changelog.setAttribute("active", false)
}



function changelogClick() {
    // Changes the text to show an indicator of selection.
  packDetails.textContent = "Details";
  permissions.textContent = "Permissions";
  changelog.textContent = "-Changelog-";

  // Changes the default button CSS to indicate it is selected.
  packDetails.setAttribute("active", false)
  permissions.setAttribute("active", false)
  changelog.setAttribute("active", true)
}