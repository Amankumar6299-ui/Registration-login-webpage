function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var Confirmpassword = document.getElementById('Confirm password').value;
  var contactnumber = document.getElementById('contactnumber').value;
  var errorMessage = document.getElementById('error-message');
  
  errorMessage.innerHTML = '';
  
  if (name.trim() === '') {
    errorMessage.innerHTML += 'Name is required.<br>';
  }
  
  if (email.trim() === '') {
    errorMessage.innerHTML += 'Email is required.<br>';
  } else if (!isValidEmail(email)) {
    errorMessage.innerHTML += 'Please enter a valid email address.<br>';
  }
  
  if (password.trim() === '') {
    errorMessage.innerHTML += 'Password is required.<br>';
  }
  if (Confirmpassword.trim() === '') {
    errorMessage.innerHTML += ' similar Password is required.<br>';
  }
  if (contactnumber.trim() === '') {
    errorMessage.innerHTML += '10 numbers are required.<br>';
  }
  
  if (errorMessage.innerHTML !== '') {
    return false; // Prevent form submission if there are errors
  }
}



function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
  
  var submit = document.getElementById("submit").addEventListener("click",validateForm());
  
  
}
