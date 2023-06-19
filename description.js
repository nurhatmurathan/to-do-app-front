
const pathGet = "https://muratkan.pythonanywhere.com/api/user/" + localStorage.getItem("username") + "/";

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
                    // console.log(data);
                    document.getElementById("user_hello").textContent = data.username; 
            
                    document.getElementById("user_email").textContent = data.email;

                })
            
        }
    });



fetch("https://muratkan.pythonanywhere.com/api/user/", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer " + localStorage.getItem("access"),
        },
        
    })
    .then(response => {
        if(response.ok){
            
            
            response.json()
                .then(data =>{
                    // console.log(data);
                    const cont = document.getElementById("users");
                    const us =localStorage.getItem("username");
                    let j = 1;
                    for(let i = 0; i < data.length; i++){
                        if(us == data[i].username)continue;
                        u = document.createElement("div");
                        a = document.createElement("a");
                        a.textContent = j++ + ". " + data[i].username;
                        u.append(a);
                        cont.append(u);
                    }

                })
            
        }
    });


var timer = setInterval(function() {
    // console.log("Access new");

    refresh = {
        "refresh": localStorage.getItem("refresh")
    }

    fetch("https://muratkan.pythonanywhere.com/api/refresh/", {
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
            // console.log(localStorage.getItem("access"));
          })
      }else{
        console.log('Can not get access token!');
      }
    })
    .catch(error => {
        console.error(error);
    });
  }, 5 * 60 * 1000);


function logout(){
    localStorage.setItem("refresh", null);
    localStorage.setItem("access", null);
    localStorage.setItem("username", null);
    window.location.href = "index.html";
}