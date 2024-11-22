document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'admin' && password === 'password') {
      // Redirect to dashboard or show success message
      alert('Login successful!');
      // For redirecting to a new page:
      // window.location.href = 'dashboard.html';
    } else {
      // Display error message
      var errorMsg = document.getElementById('error-msg');
      errorMsg.textContent = 'Invalid username or password. Please try again.';
    }
  });
  