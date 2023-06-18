document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    this.user = new Path(username);

    const user = {
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
            localStorage.setItem("refresh", data.refresh);
            localStorage.setItem("access", data.access);
            localStorage.setItem("username", username);
            // console.log(localStorage.getItem("refresh"));
            // console.log(localStorage.getItem("access"));
          })
      alert('Login successful!');
      window.location.href = "description.html";

      }else{
        alert('Login failed. Please check your username and password.');
      }
    })
    .catch(error => {
        
        alert("An error occurred. Please try again later.");
        console.error(error);
    });
  
  });

class Path{
  constructor(username){
    this.username = username;
    this.path = "http://127.0.0.1:8000/api/user/" + this.usernaame;
  }
}

