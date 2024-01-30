let packDetails = document.getElementById("packDetailsId");
let permissions = document.getElementById("termsOfUseId");
let changelog = document.getElementById("changelogId");

function detailsClick() {
  packDetails.textContent = "-Details-";
  permissions.textContent = "Permissions";
  changelog.textContent = "Changelog";
}

function permissionsClick() {
  packDetails.textContent = "Details";
  permissions.textContent = "-Permissions-";
  changelog.textContent = "Changelog";
}

function changelogClick() {
  packDetails.textContent = "Details";
  permissions.textContent = "Permissions";
  changelog.textContent = "-Changelog-";
}