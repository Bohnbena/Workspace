function savelogin() {
  let InputPassword = document.getElementById("InputPassword").value;
  let InputUser = document.getElementById("InputUser").value;

  var hiddenfield = document.getElementById("warnung");
  var colorfield = document.querySelectorAll("#InputUser, #InputPassword");

  if (InputPassword === "" || InputUser === "") {
    hiddenfield.style.display = "block";

    colorfield.forEach((element) => {
      element.style.backgroundColor = "#ff434f";
    });
  } else {
    window.location.href = "/mainmenu.html";
  }
}
