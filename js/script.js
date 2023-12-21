
let nameInput = document.getElementById('name')

document.getElementById('kirim').addEventListener("click", function () {
   const nama = nameInput.value

   if (nameInput == "") {
      document.getElementById("error-name").innerHTML = "nama tidak boleh kosong!"
   } else {
      document.getElementById('sender-greeting').innerHTML = nama
   }

})


function validateForm() {
   const name = document.forms["message-form"]["full-name"].value;
   const birthDate = document.forms["message-form"]["birth-date"].value;
   const gender = document.forms["message-form"]["gender"].value;
   const messages = document.forms["message-form"]["messages"].value;

   if (name == "" || birthDate == "" || gender == "" || messages == "") {
      alert("Tidak boleh ada yang kosong");
      return false;
   }

   setSenderUI(name, birthDate, gender, messages);
   return false;
}

function setSenderUI(name, birthDate, gender, messages) {
   const submitted = "Submitted!";
   document.getElementById("sender-full-name").innerHTML = name;
   document.getElementById("sender-birth-date").innerHTML = birthDate;
   document.getElementById("sender-gender").innerHTML = gender;
   document.getElementById("sender-messages").innerHTML = messages;
   document.getElementById("sender-hasil").innerHTML = submitted;
}