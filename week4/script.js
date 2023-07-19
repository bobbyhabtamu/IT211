function validatePassword(password) {
    // Check if the password is at least 8 characters long and contains both uppercase and lowercase letters
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password);
  }
  
