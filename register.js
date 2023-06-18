document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Perform form validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
    };

    fetch("http://127.0.0.1:8000/api/user/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .catch(error => {
        // Handle network or other errors
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  
    // Reset form fields
    // document.getElementById('name').value = '';
    // document.getElementById('email').value = '';
    // document.getElementById('password').value = '';
    // document.getElementById('confirmPassword').value = '';
  
    alert('Registration successful!');
    window.location.href = "login.html";
  });