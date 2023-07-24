function validatePassword(password) {
    // Check if the password is at least 8 characters long and contains both uppercase and lowercase letters
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password);
  }
  
  function validateForm() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const password = document.getElementById('password').value;
    const validationMessage = document.getElementById('validationMessage');
  
    // Check if first and last name are not missing
    if (!firstName || !lastName) {
      validationMessage.textContent = 'Please enter both first and last names.';
      return;
    }
  
    // Check if the password is valid
    if (!validatePassword(password)) {
      validationMessage.textContent = 'Password should have at least 8 characters, at least one uppercase letter, and at least one lowercase letter.';
      return;
    }
  
    // Validation Message
    validationMessage.textContent = 'All fields are valid!';
  }