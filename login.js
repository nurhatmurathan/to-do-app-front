document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Perform login logic (e.g., send data to server for authentication)
    fetch("http://127.0.0.1:8000/api/user/?username=" + username + "&password=" + password)
  .then(response => {
    if (response.ok) {
      // Handle successful login
      alert('Login successful!');
      
      // Access and print the response JSON
      response.json()
        .then(data => {
          console.log(data); // Print the JSON data to the browser console
          // You can further process the data as needed
        })
        .catch(error => {
          console.error('Error parsing JSON:', error);
        });
    } else {
      // Handle login error
      alert('Login failed. Please check your username and password.');
    }
  })
  .catch(error => {
    // Handle network or other errors
    alert('An error occurred. Please try again later.');
    console.error(error);
  });
  
    alert('Login successful!');
  });