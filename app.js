let btnSend = document.getElementById("btnSend")

btnSend.addEventListener("click", (e) => {
  e.preventDefault()
  const testInputs = (userName, email, subject, message) => {
    userName = document.getElementById("name-user").value
    email = document.getElementById("email").value
    subject = document.getElementById("subject").value
    message = document.getElementById("message").value

    if (userName == "" || email == "" || subject == "" || message == "") {
      alert("Por favor rellenar todos los campos")
    }
  }
  testInputs()
})