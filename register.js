document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
    };

    fetch("https://muratkan.pythonanywhere.com/api/user/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if(response.ok){
            alert('Registration successful!');
            window.location.href = "login.html";
        }else{
            alert('Registration filed!');
        }
    })
    .catch(error => {
        
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  

   
  });