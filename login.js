document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
      username: username,
      password: password,
  };
  
    
    fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
      if(response.ok){

        response.json()
          .then(data => {
            console.log(data);
          })
      }else{
        alert('Login failed. Please check your username and password.');
      }
    })
    .catch(error => {
        
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  
    alert('Login successful!');
  });