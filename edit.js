document.getElementById('EditForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById('username').value;
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

    fetch("http://127.0.0.1:8000/api/user/" + localStorage.getItem("username") + "/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access"),
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if(response.ok){
            alert('Updated successful!');
            localStorage.setItem("username", username);
            window.location.href = "description.html";
        }else{
            alert('Update filed!');
        }
    })
    .catch(error => {
        
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  

   
  });

  document.getElementsByTagName("span")[0].textContent = localStorage.getItem("username");