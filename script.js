var formCheck = document.getElementById("form")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

formCheck.addEventListener("submit", (e) => {
  var fname = document.getElementById("fname")
  var lname = document.getElementById("lname")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var error = document.getElementsByTagName("img")
  var errorSmall = document.getElementsByTagName("small")
  var input = document.getElementsByTagName("input")
  for (i = 0; i < 4; i++) {
    error[i].style.display = "none"
    errorSmall[i].style.display = "none"
    input[i].style.outline = "solid 1px gray"
  }
  if (fname.value.length < 3) {
    error[0].style.display = "flex"
    errorSmall[0].style.display = "flex"
    fname.style.outline = "solid 1px hsl(0, 100%, 74%)"
  }
  if (lname.value.length < 3) {
    error[1].style.display = "flex"
    errorSmall[1].style.display = "flex"
    lname.style.outline = "solid 1px hsl(0, 100%, 74%)"
  }
  if (email.value.match(validRegex)) {
  } else {
    error[2].style.display = "flex"
    errorSmall[2].style.display = "flex"
    email.style.outline = "solid 1px hsl(0, 100%, 74%)"
  }
  if (password.value.length < 3) {
    error[3].style.display = "flex"
    errorSmall[3].style.display = "flex"
    password.style.outline = "solid 1px hsl(0, 100%, 74%)"
  }
  e.preventDefault()
})
