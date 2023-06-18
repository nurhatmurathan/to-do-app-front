
const pathGet = "http://127.0.0.1:8000/api/user/" + localStorage.getItem("username") + "/";

fetch(pathGet, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access"),
        },
        
    })
    .then(response => {
        if(response.ok){
            
            response.json()
                .then(data =>{
                    console.log(data);
                    document.getElementById("user_hello").textContent = data.username; 
            
                    document.getElementById("user_email").textContent = data.email;

                })
            
        }
    });



var timer = setTimeout(function() {

    refresh = {
        "refresh": localStorage.getItem("refresh")
    }

    fetch("http://127.0.0.1:8000/api/refresh/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(refresh)
    })
    .then(response => {
      if(response.ok){

        response.json()
          .then(data => {
            // localStorage.setItem("refresh", data.refresh);
            localStorage.setItem("access", data.access);
            // console.log(localStorage.getItem("refresh"));
            console.log(localStorage.getItem("access"));
          })
      }else{
        console.log('Can not get access token!');
      }
    })
    .catch(error => {
        console.error(error);
    });
  }, 5 * 60 * 1000);


