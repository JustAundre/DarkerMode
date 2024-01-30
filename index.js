let packDetailsButton = document.getElementById(packDetailsButton)
let termsOfUse = document.getElementById(termsOfUse)
let changelogButton = document.getElementById(changelogButton)

/* What the site will do if the corresponding buttons are clicked. */
function detailsClick() {
    packDetailsButton.innertext("-Details-")
    termsOfUse.innertext("Permissions")
    changelogButton.innertext("Changelog")
}

function permissionsClick() {
    packDetailsButton.innertext("Details")
    termsOfUse.innertext("-Permissions-")
    changelogButton.innertext("Changelog")
}

function changelogClick() {
    packDetailsButton.innertext("Details")
    termsOfUse.innertext("Permissions")
    changelogButton.innertext("-Changelog-")
}